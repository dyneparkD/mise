import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MainCard from "../components/MainCard";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SmallCard from "../components/SmallCard";
import { bookmarkContext } from "../context/bookmarkContext";
import { lvContext } from "../context/lvContext";
import styles from "../styles/Home.module.scss";
import { dataMiseAPI } from "../types/type";

const Home = () => {
  const { bookmark } = useContext(bookmarkContext);
  const { isLv8 } = useContext(lvContext);
  const [station, setStation] = useState("서울 종로구");
  const [isLoading, setIsLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState<dataMiseAPI>({
    co: "0.0",
    coLv4: 0,
    coLv8: 0,
    dataTime: "0000-00-00 00:00",
    maxLv4: 0,
    maxLv8: 0,
    no2: "0.000",
    no2Lv4: 0,
    no2Lv8: 0,
    o3: "0.000",
    o3Lv4: 0,
    o3Lv8: 0,
    pm10: "0",
    pm10Lv4: 0,
    pm10Lv8: 0,
    pm25: "0",
    pm25Lv4: 0,
    pm25Lv8: 0,
    so2: "0.000",
    so2Lv4: 0,
    so2Lv8: 0,
  });
  const cardsArray = [
    {
      title: "미세먼지",
      level4: data.pm10Lv4,
      level8: data.pm10Lv8,
      value: data.pm10,
      unit: "μg/m³",
    },
    {
      title: "초미세먼지",
      level4: data.pm25Lv4,
      level8: data.pm25Lv8,
      value: data.pm25,
      unit: "μg/m³",
    },
    {
      title: "오존",
      level4: data.o3Lv4,
      level8: data.o3Lv8,
      value: data.o3,
      unit: "ppm",
    },
    {
      title: "이산화질소",
      level4: data.no2Lv4,
      level8: data.no2Lv8,
      value: data.no2,
      unit: "ppm",
    },
    {
      title: "일산화탄소",
      level4: data.coLv4,
      level8: data.coLv8,
      value: data.co,
      unit: "ppm",
    },
    {
      title: "아황산가스",
      level4: data.so2Lv4,
      level8: data.so2Lv8,
      value: data.so2,
      unit: "ppm",
    },
  ];
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:3001/mise/${station}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [station]);

  return (
    <div className={styles.Home} id={`bg${isLv8 ? data.maxLv8 : data.maxLv4}`}>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <MainCard
        location={station}
        time={data.dataTime}
        level={data.maxLv8}
        isLoading={isLoading}
      />
      <div className={styles.cards}>
        {cardsArray.map((card) => {
          return (
            <SmallCard
              key={card.title}
              title={card.title}
              level={isLv8 ? card.level8 : card.level4}
              value={`${card.value} ${card.unit}`}
              isLoading={isLoading}
            />
          );
        })}
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
      <div className={styles.fyi}>
        ※본 자료는 한국환경공단&#40;AirKorea&#41;에서 제공하는 “인증을 받지 않은
        실시간자료”이며 실제 값과 다를 수 있습니다.
      </div>
      <Modal isOpen={showSidebar} setIsOpen={setShowSidebar}>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      </Modal>
    </div>
  );
};

export default Home;
