import { RealEstateDataType } from "@/app/types/types";
import Card from "../../common/card/Card";
import styles from "./AllRentCardsContainer.module.css";

interface AllRentCardsProps {
  allRentRealEstates: RealEstateDataType[];
}

const AllRentCardsContainer = ({ allRentRealEstates }: AllRentCardsProps) => {
  const itemsNumber = Object.keys(allRentRealEstates).length;

  return (
    <div className={styles.homes_container}>
      {itemsNumber === 0 ? (
        <p className={styles.no_items}>該当する物件がありません</p>
      ) : (
        <div className={styles.homes_container}>
          {allRentRealEstates.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRentCardsContainer;
