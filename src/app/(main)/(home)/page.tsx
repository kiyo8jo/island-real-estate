import Access from "../../components/home/access/Access";
import Map from "../../components/common/map/Map";
import NewInfo from "../../components/home/newInfo/NewInfo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Map />
      <NewInfo />
      <Access />
    </div>
  );
}
