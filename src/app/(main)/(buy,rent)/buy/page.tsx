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

  const [allBuyRealEstates, setAllByuRealEstates] = useState<
    RealEstateDataType[]
  >([]);
  // データをソートするための値を格納するstate
  const [selectedOption, setSelectedOption] = useState("recommendation");

  useEffect(() => {
    const fetchData = async () => {
      // selectedOptionによってたたくapiを変える
      const res = await fetch(
        `http://localhost:3000/api/getAllBuyData/${selectedOption}`
      );
      const _realEstates = await res.json();
      setAllByuRealEstates(_realEstates);
    };
    fetchData();
  }, [selectedOption]);
  return (
    <div className={styles.wrapper}>
      <Title title={"買う / Buy"} />
      <Map />
      <SelectButtons setSelectedOption={setSelectedOption} />
      <AllBuyCardsContainer allBuyRealEstates={allBuyRealEstates} />
      <PageNation />
    </div>
  );
};

export default BuyPage;
