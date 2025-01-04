import styles from "./PageNation.module.css";

const PageNation = () => {
  return (
    <div className={styles.wrapper}>
      <p>{`<`}</p>
      <p>{`1`}</p>
      <p>{`2`}</p>
      <p>{`3`}</p>
      <p>{`>`}</p>
    </div>
  );
};

export default PageNation;
