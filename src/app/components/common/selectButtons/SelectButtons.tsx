import styles from "./SelectButtons.module.css";

interface SelectButtonProps {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  setSelectedArea: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedBuildingType: React.Dispatch<React.SetStateAction<string | null>>;
}

const SelectButtons = ({
  setSelectedOption,
  setSelectedArea,
  setSelectedBuildingType,
}: SelectButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button_container}>
        <p>地域</p>
        <button onClick={() => setSelectedArea("mitsune")}>三根</button>
        <button onClick={() => setSelectedArea("okago")}>大賀郷</button>
        <button onClick={() => setSelectedArea("kashitate")}>樫立</button>
        <button onClick={() => setSelectedArea("nakanogo")}>中之郷</button>
        <button onClick={() => setSelectedArea("sueyoshi")}>末吉</button>
        <button onClick={() => setSelectedArea("others")}>その他</button>
        <button onClick={() => setSelectedArea(null)}>リセット</button>
      </div>
      <div className={styles.button_container}>
        <p>種類</p>
        <button onClick={() => setSelectedBuildingType("apartment")}>
          アパート
        </button>
        <button onClick={() => setSelectedBuildingType("house")}>一戸</button>
        <button onClick={() => setSelectedBuildingType("terrace")}>
          テラス
        </button>
        <button onClick={() => setSelectedBuildingType("land")}>土地</button>
        <button onClick={() => setSelectedBuildingType("shop")}>店舗</button>
        <button onClick={() => setSelectedBuildingType("others")}>
          その他
        </button>
        <button onClick={() => setSelectedBuildingType(null)}>リセット</button>
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
