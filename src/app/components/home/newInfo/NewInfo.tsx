import Title from "../../common/title/Title";
import AllCardsContainer from "./allCardsContainer/AllCardsContainer";
import styles from "./NewInfo.module.css";

const NewInfo = () => {
  return (
    <div className={styles.wrapper}>
      <Title title={"新着情報 / New Information"} />
      <AllCardsContainer />
    </div>
  );
};

export default NewInfo;
