import Title from "../../common/title/Title";
import styles from "./Access.module.css";

const Access = () => {
  return (
    <div className={styles.wrapper}>
      <Title title={"アクセス / Access"} />
      <div className={styles.address_container}>
        <div className={styles.left_container}>map</div>
        <div className={styles.right_container}>
          <div className={styles.value_container}>
            <p className={styles.label}>Address</p>
            <p>aaaaaaaaa</p>
          </div>
          <div className={styles.value_container}>
            <p className={styles.label}>TEL</p>
            <p>aaaaaaaaa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
