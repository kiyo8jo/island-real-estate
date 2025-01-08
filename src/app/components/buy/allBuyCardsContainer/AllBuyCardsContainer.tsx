import { RealEstateDataType } from "@/app/types/types";
import Card from "../../common/card/Card";
import styles from "./AllBuyCardsContainer.module.css";

interface AllBuyCardsProps {
  allBuyRealEstates: RealEstateDataType[];
}

const AllBuyCardsContainer = ({ allBuyRealEstates }: AllBuyCardsProps) => {
  // topの2つを表示
  // const displayItemNumber = 2;
  // let displayItem
  return (
    <div className={styles.homes_container}>
      {allBuyRealEstates.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
};

export default AllBuyCardsContainer;
