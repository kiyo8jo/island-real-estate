import styles from "./SelectButtons.module.css";

interface SelectButtonProps {
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  setSelectedArea: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedBuildingType: React.Dispatch<React.SetStateAction<string | null>>;
  selectedArea: string | null;
  selectedBuildingType: string | null;
}

const SelectButtons = ({
  setSelectedOption,
  setSelectedArea,
  setSelectedBuildingType,
  selectedArea,
  selectedBuildingType,
}: SelectButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button_container}>
        <p>地域</p>
        <button
          onClick={() => {
            setSelectedArea("mitsune");
          }}
          className={`${selectedArea === "mitsune" && styles["active"]}`}
        >
          三根
        </button>
        <button
          onClick={() => {
            setSelectedArea("okago");
          }}
          className={`${selectedArea === "okago" && styles["active"]}`}
        >
          大賀郷
        </button>
        <button
          onClick={() => setSelectedArea("kashitate")}
          className={`${selectedArea === "kashitate" && styles["active"]}`}
        >
          樫立
        </button>
        <button
          onClick={() => setSelectedArea("nakanogo")}
          className={`${selectedArea === "nakanogo" && styles["active"]}`}
        >
          中之郷
        </button>
        <button
          onClick={() => setSelectedArea("sueyoshi")}
          className={`${selectedArea === "sueyoshi" && styles["active"]}`}
        >
          末吉
        </button>
        <button
          onClick={() => setSelectedArea("others")}
          className={`${selectedArea === "others" && styles["active"]}`}
        >
          その他
        </button>
        <button onClick={() => setSelectedArea(null)}>リセット</button>
      </div>
      <div className={styles.button_container}>
        <p>種類</p>
        <button
          onClick={() => setSelectedBuildingType("apartment")}
          className={`${
            selectedBuildingType === "apartment" && styles["active"]
          }`}
        >
          アパート
        </button>
        <button
          onClick={() => setSelectedBuildingType("house")}
          className={`${selectedBuildingType === "house" && styles["active"]}`}
        >
          一戸
        </button>
        <button
          onClick={() => setSelectedBuildingType("terrace")}
          className={`${
            selectedBuildingType === "terrace" && styles["active"]
          }`}
        >
          テラス
        </button>
        <button
          onClick={() => setSelectedBuildingType("land")}
          className={`${selectedBuildingType === "land" && styles["active"]}`}
        >
          土地
        </button>
        <button
          onClick={() => setSelectedBuildingType("shop")}
          className={`${selectedBuildingType === "shop" && styles["active"]}`}
        >
          店舗
        </button>
        <button
          onClick={() => setSelectedBuildingType("others")}
          className={`${selectedBuildingType === "others" && styles["active"]}`}
        >
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
