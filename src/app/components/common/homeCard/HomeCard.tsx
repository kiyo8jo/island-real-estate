import styles from "./HomeCard.module.css";

const HomeCard = () => {
  return (
    <div className={styles.home_card}>
      <div className={styles.left_container}>
        <div className={styles.img}>画像</div>
      </div>
      <div className={styles.right_container}>
        <div className={styles.home_info_container}>
          <p className={styles.home_info_label}> 借りる</p>
        </div>
        <div className={styles.home_info_container}>
          <p className={styles.home_info_label}>住所</p>
          <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
        <div className={styles.home_info_container}>
          <p className={styles.home_info_label}>値段</p>
          <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
        <div className={styles.home_info_container}>
          <p className={styles.home_info_label}>広さ</p>
          <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
