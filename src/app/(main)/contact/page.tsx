import Title from "@/app/components/common/title/Title";
import styles from "./page.module.css";

const ContactPage = () => {
  return (
    <div className={styles.wrapper}>
      <Title title="問い合わせ" />
      <form>
        <div className={styles.form_part_container}>
          <label htmlFor="name">氏名</label>
          <input type="text" id="name" placeholder="田中太郎" />
        </div>
        <div className={styles.form_part_container}>
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" placeholder="info@example.com" />
        </div>
        <div className={styles.form_part_container}>
          <label htmlFor="detail">お問い合わせ内容</label>
          <textarea id="detail" placeholder="お問い合わせ内容を入力してください"></textarea>
        </div>
        <div className={styles.button_container}>
          <button>送信する</button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
