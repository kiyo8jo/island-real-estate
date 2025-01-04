"use client";
import Title from "@/app/components/common/title/Title";
import styles from "../../page.module.css";
import Map from "@/app/components/common/map/Map";
import SelectButtons from "@/app/components/common/selectButtons/SelectButtons";
import PageNation from "@/app/components/common/pageNation/PageNation";
import { useEffect, useState } from "react";
import { RealEstateDataType } from "@/app/types/types";
import AllRentCardsContainer from "@/app/components/rent/allRentCardsContainer/AllRentCardsContainer";

const RentPage = () => {
  const [allRentRealEstates, setAllRealEstates] = useState<
    RealEstateDataType[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/getAllRentData");
      const _realEstates = await res.json();
      setAllRealEstates(_realEstates);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Title title={"借りる / Rent"} />
      <Map />
      <SelectButtons />
      <AllRentCardsContainer allRentRealEstates={allRentRealEstates} />
      <PageNation />
    </div>
  );
};

export default RentPage;
