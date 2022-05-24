import {
  faCircleInfo,
  faGear,
  faHeart,
  faMap,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Sidebar.module.scss";
import { NavbarProps } from "../types/type";

const Sidebar: FC<NavbarProps> = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={styles.Sidebar}
      id={showSidebar ? styles.show : ""}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.top}>
        <FontAwesomeIcon icon={faSun} className={styles.logo} />
        <div className={styles.name}>미세미세</div>
        <div className={styles.version}>Version 0.1</div>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            <div className={styles.text}>어플 추천하기</div>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            <div className={styles.text}>검색</div>
          </Link>
        </li>
        <li>
          <Link to="/map">
            <FontAwesomeIcon icon={faMap} className={styles.icon} />
            <div className={styles.text}>예보 지도</div>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} />
            <div className={styles.text}>About</div>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FontAwesomeIcon icon={faGear} className={styles.icon} />
            <div className={styles.text}>설정</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
