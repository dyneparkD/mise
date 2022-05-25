import styles from "../styles/Search.module.scss";
import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import station_list from "../data/station_list.json";
import { ResultsProps, SearchbarProps } from "../types/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faBookmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { bookmarkContext } from "../context/bookmarkContext";

const Search = () => {
  const [search, setSearch] = useState("");
  const { bookmark, dispatch } = useContext(bookmarkContext);

  const click = (station: string) => {
    if (bookmark.includes(station)) {
      dispatch({ type: "REMOVE_BOOKMARK", payload: station });
    } else {
      dispatch({ type: "ADD_BOOKMARK", payload: station });
    }
  };

  return (
    <div className={styles.Search}>
      <Searchbar search={search} setSearch={setSearch} />
      <Results search={search} bookmark={bookmark} click={click} />
    </div>
  );
};

export default Search;

const Searchbar: FC<SearchbarProps> = ({ search, setSearch }) => {
  return (
    <div className={styles.searchbar}>
      <div className={styles.wrapper}>
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} className={styles.leftIcon} />
        </Link>
        <input
          type="text"
          placeholder="동/읍/면 을 입력해주세요"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.xIcon}
          onClick={() => setSearch("")}
        />
      </div>
    </div>
  );
};

const Results: FC<ResultsProps> = ({ search, bookmark, click }) => {
  return (
    <div className={styles.Results}>
      <div className={styles.wrapper}>
        {search === ""
          ? bookmark.map((station) => {
              return (
                <div
                  key={station}
                  className={styles.result}
                  onClick={() => click(station)}
                >
                  <div className={styles.text}>{station}</div>
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className={styles.bookmarkIcon}
                    id={bookmark.includes(station) ? styles.bookmarked : ""}
                  />
                </div>
              );
            })
          : station_list.stations
              .filter((station) => station.adress.includes(search))
              .map((station) => {
                return (
                  <div
                    key={station.id}
                    className={styles.result}
                    onClick={() =>
                      click(`${station.state} ${station.district}`)
                    }
                  >
                    <div className={styles.text}>
                      {station.state} {station.district} : {station.adress}
                    </div>
                    <FontAwesomeIcon
                      icon={faBookmark}
                      className={styles.bookmarkIcon}
                      id={
                        bookmark.includes(
                          `${station.state} ${station.district}`
                        )
                          ? styles.bookmarked
                          : ""
                      }
                    />
                  </div>
                );
              })}
      </div>
    </div>
  );
};
