'use client'

import Link from "next/link";
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          <Link href="/">アイランド不動産</Link>
        </h1>
      </div>
      <div className={styles.link_container}>
        <div>
          <Link href="/rent">借りる</Link>
        </div>
        <div>
          <Link href="/buy">買う</Link>
        </div>
        <div>
          <Link href="/owner">オーナー</Link>
        </div>
        <div>
          <Link href="/contact">問い合わせ</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
