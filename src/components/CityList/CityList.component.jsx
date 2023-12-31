import Spinner from '../Spinner/Spinner.component';
import Message from '../Message/Message.component';
import CityItem from '../CityItem/CityItem.component';

import styles from './CityList.module.css';
import { useCities } from '../../contexts/CitiesContext.component';

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
