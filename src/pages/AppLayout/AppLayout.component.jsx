import Map from '../../components/Map/Map.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import User from '../../components/User/User.component';

import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
