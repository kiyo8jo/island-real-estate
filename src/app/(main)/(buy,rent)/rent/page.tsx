import Title from "@/app/components/common/title/Title";
import styles from "../../page.module.css";
import Map from "@/app/components/common/map/Map";
import SelectButtons from "@/app/components/common/selectButtons/SelectButtons";
import HomeCard from "@/app/components/common/homeCard/HomeCard";
import PageNation from "@/app/components/common/pageNation/PageNation";

const RentPage = () => {
  return (
    <div className={styles.wrapper}>
      <Title title={"借りる / Rent"} />
      <Map />
      <SelectButtons />
      <div className={styles.homes_container}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
      <PageNation />
    </div>
  );
};

export default RentPage;
