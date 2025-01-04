import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.title}>会社情報</h3>
        <p>・会社情報</p>
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>借りる / Rent</h3>
        <p>・三根 / mitsune</p>
        <p>・大賀郷 / okago</p>
        <p>・樫立 / kashitate</p>
        <p>・中之郷 / nakanogo</p>
        <p>・末吉 / sueyoshi</p>
        <p>・その他 / others</p>
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>買う / Buy</h3>
        <p>・三根 / mitsune</p>
        <p>・大賀郷 / okago</p>
        <p>・樫立 / kashitate</p>
        <p>・中之郷 / nakanogo</p>
        <p>・末吉 / sueyoshi</p>
        <p>・その他 / others</p>
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>オーナー / Owner</h3>
        <p>・オーナー / Owner</p>
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>問い合わせ / Contact</h3>
        <p>・問い合わせ / Contact</p>
      </div>
    </div>
  );
};

export default Footer;
