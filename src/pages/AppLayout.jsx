import SideBar from "../components/SideBar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}
