import { RealEstateDataType } from "@/app/types/types";
import styles from "./PageNation.module.css";

interface PageNationProps {
  allBuyRealEstates: RealEstateDataType[];
}

const PageNation = ({ allBuyRealEstates }: PageNationProps) => {
  // 1ページあたりに表示する数
  const displayItemsNumber = 2;
  // fetchしたデータの要素数
  const itemsNumber = Object.keys(allBuyRealEstates).length;
  // 必要なページ数
  const pagesNumber = Math.ceil(itemsNumber / displayItemsNumber);
  // ページを格納する空の配列
  const pagesArray: number[] = [];
  // 配列にページを格納
  for (let i = 1; i < pagesNumber + 1; i++) {
    pagesArray.push(i);
  }
  console.log(pagesArray);
  return (
    <div className={styles.wrapper}>
      {/* fetchした要素数が0でない場合表示 */}
      {itemsNumber !== 0 && (
        <div className={styles.container}>
          <p>{`<`}</p>
          {pagesArray.map((page) => (
            <p key={page}>{page}</p>
          ))}
          <p>{`>`}</p>
        </div>
      )}
    </div>
  );
};

export default PageNation;
