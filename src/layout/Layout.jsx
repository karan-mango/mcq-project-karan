import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";

import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        {/* Navbar */}
        <div className={styles.navbar}>
          <Navbar />
        </div>

        {/* Main Content */}
        <main className={styles.main}>
          <div className={styles.outlet}>
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <div className={styles.footer}>
          <Fotter />
        </div>
      </div>
    </div>
  );
}

export default Layout;
