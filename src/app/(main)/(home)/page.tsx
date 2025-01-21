import Access from "../../components/home/access/Access";
import NewInfo from "../../components/home/newInfo/NewInfo";
import MainImg from "../../components/img/main/MainImg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <MainImg />
      <NewInfo />
      <Access />
    </div>
  );
}
