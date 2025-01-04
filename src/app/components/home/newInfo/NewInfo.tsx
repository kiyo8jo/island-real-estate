import HomeCard from "../../common/homeCard/HomeCard";
import Title from "../../common/title/Title";
import styles from "./NewInfo.module.css";

const NewInfo = () => {
  return (
    <div className={styles.wrapper}>
      <Title title={"新着情報 / New Information"} />
      <div className={styles.homes_container}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};

export default NewInfo;
