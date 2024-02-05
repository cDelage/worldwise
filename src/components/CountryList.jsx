import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCitiesProvider } from "../context/CitiesContext";

function CountriesList() {
  const { cities, isLoading } = useCitiesProvider()
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((arr, city) => {
    return arr.map((country) => country.country).includes(city.country)
      ? [...arr]
      : [...arr, {country : city.country, emoji : city.emoji}];
  }, []);
  if (cities.length === 0)
    return <Message message={"Add your first city by clicking on the map"} />;
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country}/>
      ))}
    </ul>
  );
}

export default CountriesList;
