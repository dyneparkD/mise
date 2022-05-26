import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import { FC } from "react";
import { NavbarProps } from "../types/type";

const Navbar: FC<NavbarProps> = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowSidebar(!showSidebar)}
            title="메뉴"
          />
        </div>
        <ul className={styles.right}>
          <li>
            <Link to="/share" title="공유">
              <FontAwesomeIcon icon={faShareNodes} />
            </Link>
          </li>
          <li>
            <Link to="/map" title="지도">
              <FontAwesomeIcon icon={faMap} />
            </Link>
          </li>
          <li>
            <Link to="/search" title="검색">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
