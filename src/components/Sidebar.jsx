import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet/>

      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyright 2023 Worlwise inc</p>
      </footer>
    </div>
  );
}

export default Sidebar;
