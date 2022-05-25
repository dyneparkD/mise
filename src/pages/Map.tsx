import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LocalNavbar from "../components/LocalNavbar";
import styles from "../styles/Map.module.scss";

const Map = () => {
  const seoul = {
    longitude: 127.02,
    latitude: 37.53,
  };
  const [position, setPosition] = useState(seoul);
  const [pm, setPm] = useState(10);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      });
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }
  console.log(position);
  let pm10 = `https://earth.nullschool.net/#current/particulates/surface/level/overlay=pm10/orthographic=127,37,4000/loc=${position.longitude},${position.latitude}`;
  let pm25 = `https://earth.nullschool.net/#current/particulates/surface/level/overlay=pm2.5/orthographic=127,37,4000/loc=${position.longitude},${position.latitude}`;
  return (
    <div className={styles.Map}>
      <LocalNavbar current="지도" />
      <section>
        <iframe title="PM10" src={pm10} />
        <div className={styles.topRight}>
          <button>미세먼지</button>
          <button onClick={() => getLocation()}>GPS</button>
          <button onClick={() => setPosition(seoul)}>서울</button>
        </div>
        <div className={styles.scale}>
          <div>현재위치</div>
          <FontAwesomeIcon icon={faCircle} className={styles.circle} />
        </div>
      </section>
      <section>
        <iframe title="PM2.5" src={pm25} />
        <div className={styles.topRight}>
          <button>초미세먼지</button>
          <button onClick={() => getLocation()}>GPS</button>
          <button onClick={() => setPosition(seoul)}>서울</button>
        </div>
        <div className={styles.scale}>
          <div>현재위치</div>
          <FontAwesomeIcon icon={faCircle} className={styles.circle} />
        </div>
      </section>
      <div className={styles.bottom}>
        <div>nullSchool에서 제공된 실시간 자료입니다.</div>
        <div>스크롤 가능합니다</div>
      </div>
    </div>
  );
};

export default Map;
