"use client";

import Title from "@/app/components/common/title/Title";
import styles from "./page.module.css";
import Map from "@/app/components/common/map/Map";
import SelectButtons from "@/app/components/common/selectButtons/SelectButtons";
import PageNation from "@/app/components/common/pageNation/PageNation";
import { useEffect, useState } from "react";
import { RealEstateDataType } from "@/app/types/types";
import AllBuyCardsContainer from "@/app/components/buy/allBuyCardsContainer/AllBuyCardsContainer";

const BuyPage = () => {
  // 取得したデータを格納するstate
  const [allBuyRealEstates, setAllBuyRealEstates] = useState<
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
    const fetchData = async () => {
      // selectedOptionによってたたくapiを変える
      const res = await fetch(
        `http://localhost:3000/api/getAllBuyData/${selectedOption}`,
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
      setAllBuyRealEstates(_realEstates);
    };
    fetchData();
  }, [selectedOption, selectedArea, selectedBuildingType]);
  return (
    <div className={styles.wrapper}>
      <Title title={"買う / Buy"} />
      <Map />
      <SelectButtons
        setSelectedOption={setSelectedOption}
        setSelectedArea={setSelectedArea}
        setSelectedBuildingType={setSelectedBuildingType}
      />
      <AllBuyCardsContainer allBuyRealEstates={allBuyRealEstates} />
      <PageNation />
    </div>
  );
};

export default BuyPage;
