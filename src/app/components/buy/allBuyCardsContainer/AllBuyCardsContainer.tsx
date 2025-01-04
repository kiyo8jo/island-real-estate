import { RealEstateDataType } from "@/app/types/types";
import Card from "../../common/card/Card";
import styles from "./AllBuyCardsContainer.module.css";

interface AllBuyCardsProps {
  allBuyRealEstates: RealEstateDataType[];
}

const AllBuyCardsContainer = ({ allBuyRealEstates }: AllBuyCardsProps) => {
  return (
    <div className={styles.homes_container}>
      {allBuyRealEstates.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
};

export default AllBuyCardsContainer;
