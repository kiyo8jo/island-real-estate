import Image from "next/image";
import styles from "./MainImg.module.css";
import Link from "next/link";

const MainImg = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.img}
        src="/main/main.png"
        useMap="#image-map"
        alt="main"
        fill
        style={{ objectFit: "contain" }}
        priority
      />
      <map name="image-map">
        <Link href="/rent">
          <area
            target="_blank"
            alt="mitusne_rent"
            title="mitusne_rent"
            coords="465,169,510,192"
            shape="rect"
          />
        </Link>
        <Link href="/buy">
          <area
            target="_blank"
            alt="mitusne_buy"
            title="mitusne_buy"
            href="http://localhost:3000/buy"
            coords="518,167,557,192"
            shape="rect"
          />
        </Link>
        <Link href="/rent">
          <area
            target="_blank"
            alt="okago_rent"
            title="okago_rent"
            href="http://localhost:3000/rent"
            coords="254,271,302,294"
            shape="rect"
          />
        </Link>
        <Link href="/buy">
          <area
            target="_blank"
            alt="okago_buy"
            title="okago_buy"
            href="http://localhost:3000/buy"
            coords="311,271,343,294"
            shape="rect"
          />
        </Link>
        <Link href="/rent">
          <area
            target="_blank"
            alt="kashitate_rent"
            title="kashitate_rent"
            href="http://localhost:3000/rent"
            coords="373,399,421,421"
            shape="rect"
          />
        </Link>
        <Link href="/buy">
          <area
            target="_blank"
            alt="kashitate_buy"
            title="kashitate_buy"
            href="http://localhost:3000/buy"
            coords="430,398,464,420"
            shape="rect"
          />
        </Link>
        <Link href="/rent">
          <area
            target="_blank"
            alt="nakanogo_rent"
            title="nakanogo_rent"
            href="http://localhost:3000/rent"
            coords="558,397,602,420"
            shape="rect"
          />
        </Link>
        <Link href="/buy">
          <area
            target="_blank"
            alt="nakanogo_buy"
            title="nakanogo_buy"
            href="http://localhost:3000/buy"
            coords="617,397,648,419"
            shape="rect"
          />
        </Link>
        <Link href="/rent">
          <area
            target="_blank"
            alt="sueyoshi_rent"
            title="sueyoshi_rent"
            href="http://localhost:3000/rent"
            coords="680,267,728,294"
            shape="rect"
          />
        </Link>
        <Link href="/buy">
          <area
            target="_blank"
            alt="sueyoshi_buy"
            title="sueyoshi_buy"
            href="http://localhost:3000/buy"
            coords="736,268,770,293"
            shape="rect"
          />
        </Link>
      </map>
    </div>
  );
};

export default MainImg;
