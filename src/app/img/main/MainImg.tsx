import Image from "next/image";
import styles from "./MainImg.module.css";

const MainImg = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/main/main.png"
        width={924}
        height={500}
        alt="main"
        priority
      />
    </div>
  );
};

export default MainImg;
