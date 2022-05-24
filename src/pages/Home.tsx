import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MainCard from "../components/MainCard";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SmallCard from "../components/SmallCard";
import { bookmarkContext } from "../context/bookmarkContext";
import styles from "../styles/Home.module.scss";
import { dataMiseAPI } from "../types/type";

const Home = () => {
  const { bookmark } = useContext(bookmarkContext);
  const [station, setStation] = useState(bookmark[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState<dataMiseAPI>({
    dataTime: "",
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
  const cardsArray = [
    {
      title: "미세먼지",
      level: data.pm10Grade,
      value: data.pm10Value,
      unit: "μg/m³",
    },
    {
      title: "초미세먼지",
      level: data.pm25Grade,
      value: data.pm25Value,
      unit: "μg/m³",
    },
    {
      title: "오존",
      level: data.o3Grade,
      value: data.o3Value,
      unit: "ppm",
    },
    {
      title: "이산화질소",
      level: data.no2Grade,
      value: data.no2Value,
      unit: "ppm",
    },
    {
      title: "일산화탄소",
      level: data.coGrade,
      value: data.coValue,
      unit: "ppm",
    },
    {
      title: "아황산가스",
      level: data.so2Grade,
      value: data.so2Value,
      unit: "ppm",
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:3001/mise/${station}`)
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
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <MainCard
        location={station}
        time={data.dataTime}
        level={data.khaiGrade}
        isLoading={isLoading}
      />
      <div className={styles.cards}>
        {cardsArray.map((card) => {
          return (
            <SmallCard
              key={card.title}
              title={card.title}
              level={card.level}
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
