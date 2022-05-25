import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocalNavbar from "../components/LocalNavbar";
import styles from "../styles/Map.module.scss";

const Map = () => {
  const pm10 =
    "https://earth.nullschool.net/#current/particulates/surface/level/overlay=pm10/orthographic=127,37,4000/loc=126.980,37.570";
  const pm25 =
    "https://earth.nullschool.net/#current/particulates/surface/level/overlay=pm2.5/orthographic=127,37,4000/loc=126.980,37.570";
  return (
    <div className={styles.Map}>
      <LocalNavbar current="지도" />
      <section>
        <iframe title="PM10" src={pm10} />
        <div className={styles.text}>미세먼지</div>
        <div className={styles.scale}>
          <FontAwesomeIcon icon={faCircle} className={styles.circle} />
          <div>현재위치</div>
        </div>
      </section>
      <section>
        <iframe title="PM2.5" src={pm25} />
        <div className={styles.text}>초미세먼지</div>
        <div className={styles.scale}>
          <FontAwesomeIcon icon={faCircle} className={styles.circle} />
          <div>현재위치</div>
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
