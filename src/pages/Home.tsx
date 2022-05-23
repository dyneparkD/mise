import axios from "axios";
import { useEffect, useState } from "react";
import MainCard from "../components/MainCard";
import Navbar from "../components/Navbar";
import SmallCard from "../components/SmallCard";
import styles from "../styles/Home.module.scss";
import { dataMiseAPI } from "../types/type";

const Home = () => {
  const buttons = ["서울 종로구", "서울 강남구", "경기 수내동", "경기 신원동"];
  const [station, setStation] = useState(buttons[0]);
  const [data, setData] = useState<dataMiseAPI>({
    dataTime: "0",
    pm10Value: 0,
    pm10Grade: "0",
    pm25Value: 0,
    pm25Grade: "0",
    o3Value: 0,
    o3Grade: "0",
    coValue: 0,
    coGrade: "0",
    no2Value: 0,
    no2Grade: "0",
    so2Value: 0,
    so2Grade: "0",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/mise/${station}`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [station]);

  return (
    <div className={styles.Home} id={`bg2`}>
      <Navbar />
      <MainCard location={station} time={"0"} level={"0"} />
      <div className={styles.cards}>
        <SmallCard
          title="미세먼지"
          level={data.pm10Grade}
          value={`${data.pm10Value} μg/m³`}
        />
        <SmallCard
          title="초미세먼지"
          level={data.pm25Grade}
          value={`${data.pm25Value} μg/m³`}
        />
        <SmallCard
          title="오존"
          level={data.o3Grade}
          value={`${data.o3Value} ppm`}
        />
        <SmallCard
          title="이산화질소"
          level={data.no2Grade}
          value={`${data.no2Value} ppm`}
        />
        <SmallCard
          title="일산화탄소"
          level={data.coGrade}
          value={`${data.coValue} ppm`}
        />
        <SmallCard
          title="아황산가스"
          level={data.so2Grade}
          value={`${data.so2Value} ppm`}
        />
      </div>
      <div className={styles.buttons}>
        {buttons.map((item) => {
          return (
            <button key={item} onClick={() => setStation(item)}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
