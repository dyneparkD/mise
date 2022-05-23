import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faMap } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.left}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={styles.right}>
        <li>
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </li>
        <li>
          <Link to="/map">
            <FontAwesomeIcon icon={faMap} />
          </Link>
        </li>
        <li>
          <Link to="/share">
            <FontAwesomeIcon icon={faShareNodes} />
          </Link>
        </li>
        <li>
          <Link to="/bookmark">
            <FontAwesomeIcon icon={faBookmark} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
