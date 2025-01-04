"use client";
import { useEffect, useState } from "react";
import styles from './AllCardsContainer.module.css'
import { RealEstateDataType } from "@/app/types/types";
import Card from "@/app/components/common/card/Card";

const AllCardsContainer = () => {
  const [allRealEstates, setAllRealEstates] = useState<RealEstateDataType[]>(
    []
  );
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/getAllData");
      const _realEstates = await res.json();
      setAllRealEstates(_realEstates);
    };
    fetchData();
  }, []);
  return (
    <div className={styles.homes_container}>
      {allRealEstates.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
};

export default AllCardsContainer;
