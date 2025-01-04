"use client";
import Title from "../../common/title/Title";
import styles from "./NewInfo.module.css";
import Card from "../../common/Card/Card";
import { useEffect, useState } from "react";
import { RealEstateDataType } from "@/app/types/types";

const NewInfo = () => {
  const [realEstates, setRealEstates] = useState<RealEstateDataType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/getData");
      const _realEstates = await res.json();
      setRealEstates(_realEstates);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Title title={"新着情報 / New Information"} />
      <div className={styles.homes_container}>
        {realEstates.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default NewInfo;
