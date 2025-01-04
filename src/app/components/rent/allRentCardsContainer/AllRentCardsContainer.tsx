import { RealEstateDataType } from "@/app/types/types";
import Card from "../../common/card/Card";
import styles from "./AllRentCardsContainer.module.css";

interface AllRentCardsProps {
  allRentRealEstates: RealEstateDataType[];
}

const AllRentCardsContainer = ({ allRentRealEstates }: AllRentCardsProps) => {
  return (
    <div className={styles.homes_container}>
      {allRentRealEstates.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
};

export default AllRentCardsContainer;
