"use client";

import Title from "@/app/components/common/title/Title";
import styles from "./page.module.css";
import { useState } from "react";
import Document from "@/app/components/common/document/Document";

const ContactPage = () => {
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <Title title="問い合わせ" />
      <form>
        <div className={styles.form_part_container}>
          <label htmlFor="name">氏名</label>
          <input type="text" id="name" placeholder="田中太郎" />
        </div>
        <div className={styles.form_part_container}>
          <label htmlFor="tel">電話番号</label>
          <input type="tel" id="tel" placeholder="000-0000-0000" />
        </div>
        <div className={styles.form_part_container}>
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" placeholder="info@example.com" />
        </div>
        <div className={styles.form_part_container}>
          <label htmlFor="detail">お問い合わせ内容</label>
          <textarea
            id="detail"
            placeholder="お問い合わせ内容を入力してください"
          ></textarea>
        </div>
        <div className={styles.personalDataContainer}>
          <p className={styles.title}>個人情報について</p>
          <div className={styles.test} id="personal_data">
            <div>
              <p className={styles.click} onClick={() => setDisplay(true)}>
                クリックしてポリシーを確認して下さい
              </p>
              {display && <Document />}
            </div>
            {display && (
              <div className={styles.input_container}>
                <input type="checkbox" />
                <p>ポリシーを確認し、同意しました</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.button_container}>
          <button>送信する</button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
