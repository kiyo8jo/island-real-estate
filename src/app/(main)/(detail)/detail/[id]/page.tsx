import styles from "./page.module.css";
import Title from "@/app/components/common/title/Title";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/getDetailData/${id}`);
  const realEstate = await res.json();

  return (
    <div className={styles.wrapper}>
      <Title title={realEstate?.name} />
      <div className={styles.value_container}>
        <div className={styles.main_value}>
          <p>{realEstate?.value}円</p>
          <p>/</p>
          <p>管理費・共益費: 10000円</p>
        </div>
        <div className={styles.sub_value}>
          <p>敷金： 10000円</p>
          <p>/</p>
          <p>礼金： 10000円</p>
          <p>/</p>
          <p>保証金： 0円</p>
        </div>
      </div>
      <div className={styles.img}>img</div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>地域</th>
            <td colSpan={4}>{realEstate?.area}</td>
          </tr>
          <tr>
            <th>住所</th>
            <td colSpan={4}>{realEstate?.address}</td>
          </tr>
          <tr>
            <th>建物種別</th>
            <td colSpan={4}>{realEstate?.buildingType}</td>
          </tr>
          <tr>
            <th>間取り</th>
            <td>{realEstate?.layout}</td>
            <th>専有面積</th>
            <td>
              {realEstate?.space}m<sup>2</sup>
            </td>
          </tr>
          <tr>
            <th>築年数</th>
            <td>{realEstate?.year}</td>
            <th>階</th>
            <td>1階</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailPage;
