import { FC } from "react";
import styles from "../styles/MainCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceDizzy,
  faFaceFrown,
  faFaceGrinBeamSweat,
  faFaceGrinStars,
  faFaceLaugh,
  faFaceLaughSquint,
  faFaceMeh,
  faFaceSmile,
  faFaceTired,
} from "@fortawesome/free-regular-svg-icons";
import { MainCardProps, MainCardTextProps } from "../types/type";

const MainCard: FC<MainCardProps> = ({ location, time, level }) => {
  const Message = {
    0: <MainCardText status="???" message="데이터를 불러올 수 없습니다." />,
    1: <MainCardText status="최고" message="먼지 하나 없네요!" />,
    2: <MainCardText status="매우좋음" message="공기가 너무 좋아요!" />,
    3: <MainCardText status="좋음" message="쾌적한 날이에요~" />,
    4: <MainCardText status="보통" message="무난한 날이에요~" />,
    5: <MainCardText status="별로" message="별로 좋지는 않네요" />,
    6: <MainCardText status="나쁨" message="마스크 꼭 챙기세요~" />,
    7: <MainCardText status="매우나쁨" message="외출을 삼가세요!" />,
    8: <MainCardText status="최악" message="나가지 마세요~" />,
  };

  const Icon = {
    0: <FontAwesomeIcon icon={faFaceGrinBeamSweat} />,
    1: <FontAwesomeIcon icon={faFaceGrinStars} />,
    2: <FontAwesomeIcon icon={faFaceLaughSquint} />,
    3: <FontAwesomeIcon icon={faFaceLaugh} />,
    4: <FontAwesomeIcon icon={faFaceSmile} />,
    5: <FontAwesomeIcon icon={faFaceMeh} />,
    6: <FontAwesomeIcon icon={faFaceFrown} />,
    7: <FontAwesomeIcon icon={faFaceTired} />,
    8: <FontAwesomeIcon icon={faFaceDizzy} />,
  };

  return (
    <div className={styles.MainCard}>
      <div className={styles.location}>{location}</div>
      <div className={styles.time}>{time}</div>
      <div className={styles.icon}>{Icon[level]}</div>
      <div className={styles.Text}>{Message[level]}</div>
    </div>
  );
};

const MainCardText: FC<MainCardTextProps> = ({ status, message }) => {
  return (
    <>
      <div className={styles.status}>{status}</div>
      <div className={styles.message}>{message}</div>
    </>
  );
};

export default MainCard;
