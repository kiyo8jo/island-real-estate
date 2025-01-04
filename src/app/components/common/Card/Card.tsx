import { RealEstateDataType } from "@/app/types/types";
import styles from "./Card.module.css";

interface Props {
  data: RealEstateDataType;
}

const Card = ({ data }: Props) => {
  return (
    <div className={styles.home_card}>
      <div className={styles.left_container}>
        <div className={styles.img}>画像</div>
      </div>
      <div className={styles.right_container}>
        <div className={styles.home_info_container}>
          <p className={styles.home_info_label}> 借りる</p>
          <p>{data.type}</p>
        </div>
        <div className={styles.home_info_container}>
          <p className={styles.home_info_label}>住所</p>
          <p>{data.address}</p>
        </div>
        <div className={styles.home_info_container}>
          <p className={styles.home_info_label}>値段</p>
          <p>{data.value}</p>
        </div>
        <div className={styles.home_info_container}>
          <p className={styles.home_info_label}>広さ</p>
          <p>{data.space}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
