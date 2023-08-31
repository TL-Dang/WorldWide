import Map from '../../components/Map/Map.component';
import Sidebar from '../../components/Sidebar/sidebar.component';

import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
