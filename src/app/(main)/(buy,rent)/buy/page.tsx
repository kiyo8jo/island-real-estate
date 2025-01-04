"use client";

import Title from "@/app/components/common/title/Title";
import styles from "../../page.module.css";
import Map from "@/app/components/common/map/Map";
import SelectButtons from "@/app/components/common/selectButtons/SelectButtons";
import PageNation from "@/app/components/common/pageNation/PageNation";
import Card from "@/app/components/common/Card/Card";
import { useEffect, useState } from "react";
import { RealEstateDataType } from "@/app/types/types";

const BuyPage = () => {
  const [allBuyRealEstates, setAllByuRealEstates] = useState<
    RealEstateDataType[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/getAllBuyData");
      const _realEstates = await res.json();
      setAllByuRealEstates(_realEstates);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.wrapper}>
      <Title title={"買う / Buy"} />
      <Map />
      <SelectButtons />
      <div className={styles.homes_container}>
        {allBuyRealEstates.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
      <PageNation />
    </div>
  );
};

export default BuyPage;
