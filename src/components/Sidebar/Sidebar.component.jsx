import { Outlet } from 'react-router-dom';
import Logo from '../Logo/Logo.component';
import AppNav from '../AppNav/AppNav.component';
import Footer from '../Footer/Footer.component';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
