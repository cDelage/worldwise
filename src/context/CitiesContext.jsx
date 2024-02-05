import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:9000/cities");
        if (!res.ok) {
          throw new Error("Fail");
        }
        const data = await res.json();
        setCities(data);
      } catch (e) {
        alert("There was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id){
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:9000/cities/${id}`);
      if (!res.ok) {
        throw new Error("Fail");
      }
      const data = await res.json();
      setCurrentCity(data);
    } catch (e) {
      alert("There was an error loading data");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCitiesProvider() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("CitiesContext was used outside of CitiesProvider");

  return context;
}

export { CitiesProvider, CitiesContext, useCitiesProvider };
