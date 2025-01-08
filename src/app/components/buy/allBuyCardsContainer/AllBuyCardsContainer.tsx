import { RealEstateDataType } from "@/app/types/types";
import Card from "../../common/card/Card";
import styles from "./AllBuyCardsContainer.module.css";

interface AllBuyCardsProps {
  allBuyRealEstates: RealEstateDataType[];
}

const AllBuyCardsContainer = ({ allBuyRealEstates }: AllBuyCardsProps) => {
  const itemsNumber = Object.keys(allBuyRealEstates).length;

  return (
    <div className={styles.homes_container}>
      {itemsNumber === 0 ? (
        <p className={styles.no_items}>該当する物件がありません</p>
      ) : (
        <div className={styles.homes_container}>
          {allBuyRealEstates.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBuyCardsContainer;
