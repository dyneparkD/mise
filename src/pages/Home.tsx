import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MainCard from "../components/MainCard";
import Navbar from "../components/Navbar";
import SmallCard from "../components/SmallCard";
import { bookmarkContext } from "../context/bookmarkContext";
import styles from "../styles/Home.module.scss";
import { dataMiseAPI } from "../types/type";

const Home = () => {
  const { bookmark } = useContext(bookmarkContext);
  const [station, setStation] = useState(bookmark[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<dataMiseAPI>({
    dataTime: "0",
    khaiValue: 0,
    khaiGrade: 0,
    pm10Value: 0,
    pm10Grade: 0,
    pm25Value: 0,
    pm25Grade: 0,
    o3Value: 0,
    o3Grade: 0,
    coValue: 0,
    coGrade: 0,
    no2Value: 0,
    no2Grade: 0,
    so2Value: 0,
    so2Grade: 0,
  });

  useEffect(() => {
    let stationName = station.split(" ");
    setIsLoading(true);
    axios
      .get(`http://localhost:3001/mise/${stationName[1]}`)
      .then((res) => {
        setData(res.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [station]);

  return (
    <div className={styles.Home} id={`bg${data.khaiGrade}`}>
      <Navbar />
      <MainCard
        location={station}
        time={data.dataTime}
        level={2}
        isLoading={isLoading}
      />
      <div className={styles.cards}>
        <SmallCard
          title="미세먼지"
          level={data.pm10Grade}
          value={`${data.pm10Value} μg/m³`}
          isLoading={isLoading}
        />
        <SmallCard
          title="초미세먼지"
          level={data.pm25Grade}
          value={`${data.pm25Value} μg/m³`}
          isLoading={isLoading}
        />
        <SmallCard
          title="오존"
          level={data.o3Grade}
          value={`${data.o3Value} ppm`}
          isLoading={isLoading}
        />
        <SmallCard
          title="이산화질소"
          level={data.no2Grade}
          value={`${data.no2Value} ppm`}
          isLoading={isLoading}
        />
        <SmallCard
          title="일산화탄소"
          level={data.coGrade}
          value={`${data.coValue} ppm`}
          isLoading={isLoading}
        />
        <SmallCard
          title="아황산가스"
          level={data.so2Grade}
          value={`${data.so2Value} ppm`}
          isLoading={isLoading}
        />
      </div>
      <div className={styles.buttons}>
        {bookmark.map((item: string) => {
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
