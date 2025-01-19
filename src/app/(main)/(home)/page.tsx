import Access from "../../components/home/access/Access";
import NewInfo from "../../components/home/newInfo/NewInfo";
import styles from "./page.module.css";
import MainImg from "@/app/components/img/main/MainImg";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <MainImg />
      <NewInfo />
      <Access />
    </div>
  );
}
