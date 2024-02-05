import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCitiesProvider } from "../context/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCitiesProvider()
  if (isLoading) return <Spinner />;

  if( cities.length === 0 ) return <Message message={"Add your first city by clicking on the map"}/>
  return (
    <ul className={styles.cityList}>
      {cities.map(city => <CityItem city={city} key={city.id}/>)}
    </ul>
  );
}

export default CityList;
