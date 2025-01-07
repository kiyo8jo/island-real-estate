import styles from "./SelectButtons.module.css";

interface SelectButtonProps {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const SelectButtons = ({ setSelectedOption }: SelectButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button_container}>
        <p>地域</p>
        <div>三根</div>
        <div>大賀郷</div>
        <div>樫立</div>
        <div>中之郷</div>
        <div>末吉</div>
        <div>その他</div>
      </div>
      <div className={styles.button_container}>
        <p>種類</p>
        <div>アパート</div>
        <div>一戸</div>
        <div>テラス</div>
        <div>土地</div>
        <div>店舗</div>
        <div>その他</div>
      </div>
      <div className={styles.select_container}>
        <p>並び替え :</p>
        <select onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="recommendation">おすすめ順</option>
          <option value="new">新着順</option>
          <option value="cheap">低価格順</option>
          <option value="expensive">高価格順</option>
          <option value="year">築年数が新しい順</option>
          <option value="space">専有面積が広い順</option>
        </select>
      </div>
    </div>
  );
};

export default SelectButtons;
