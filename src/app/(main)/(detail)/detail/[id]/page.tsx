"use client";

import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { RealEstateDataType } from "@/app/types/types";

const DetailPage = () => {
  const { id } = useParams();
  const [realEstate, setRealEstate] = useState<RealEstateDataType | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      // selectedOptionによってたたくapiを変える
      const res = await fetch(`http://localhost:3000/api/getDetailData/${id}`);
      const _realEstate = await res.json();
      setRealEstate(_realEstate);
      console.log(_realEstate);
    };
    fetchData();
  }, [id]);

  return <div className={styles.wrapper}>{realEstate?.name}</div>;
};

export default DetailPage;
