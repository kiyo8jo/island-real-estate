"use client";
import Title from "@/app/components/common/title/Title";
import styles from "./page.module.css";
import Map from "@/app/components/common/map/Map";
import SelectButtons from "@/app/components/common/filterAndResetButtons/FilterAndResetButtons";
import PageNation from "@/app/components/common/pageNation/PageNation";
import { useEffect, useState } from "react";
import { RealEstateDataType } from "@/app/types/types";
import AllRentCardsContainer from "@/app/components/rent/allRentCardsContainer/AllRentCardsContainer";

const RentPage = () => {
  // 取得したデータを格納するstate
  const [allRentRealEstates, setAllRealEstates] = useState<
    RealEstateDataType[]
  >([]);
  // データをソートするための値を格納するstate
  const [selectedOption, setSelectedOption] =
    useState<string>("recommendation");

  // データを絞り込むための値（地域）を格納するstate
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  // データを絞り込むための値（種類）を格納するstate
  const [selectedBuildingType, setSelectedBuildingType] = useState<
    string | null
  >(null);

  useEffect(() => {
    const fetchAllData = async () => {
      // selectedOptionによってたたくapiを変える
      const res = await fetch(
        `http://localhost:3000/api/getAllRentData/${selectedOption}`,
        {
          method: "POST",
          body: JSON.stringify({
            // ソートのためにarea,buildingTypeをpost
            area: selectedArea,
            buildingType: selectedBuildingType,
          }),
        }
      );
      const _realEstates = await res.json();
      setAllRealEstates(_realEstates);
    };

    fetchAllData();
  }, [selectedOption, selectedArea, selectedBuildingType]);

  return (
    <div className={styles.wrapper}>
      <Title title={"借りる / Rent"} />
      <Map />
      <SelectButtons
        setSelectedOption={setSelectedOption}
        setSelectedArea={setSelectedArea}
        setSelectedBuildingType={setSelectedBuildingType}
        selectedArea={selectedArea}
        selectedBuildingType={selectedBuildingType}
      />
      <AllRentCardsContainer allRentRealEstates={allRentRealEstates} />
      <PageNation />
    </div>
  );
};

export default RentPage;
