"use client";
import Title from "../../common/title/Title";
import styles from "./NewInfo.module.css";
import Card from "../../common/Card/Card";
import { useEffect, useState } from "react";
import { RealEstateDataType } from "@/app/types/types";

const NewInfo = () => {
  const [allRealEstates, setAllRealEstates] = useState<RealEstateDataType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/getAllData");
      const _realEstates = await res.json();
      setAllRealEstates(_realEstates);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Title title={"新着情報 / New Information"} />
      <div className={styles.homes_container}>
        {allRealEstates.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default NewInfo;
