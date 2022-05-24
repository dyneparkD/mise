import { Dispatch, SetStateAction } from "react";

type level = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

export type dataMiseAPI = {
  dataTime: string;
  pm10Value: number;
  pm10Grade: level;
  pm25Value: number;
  pm25Grade: level;
  o3Value: number;
  o3Grade: level;
  coValue: number;
  coGrade: level;
  no2Value: number;
  no2Grade: level;
  so2Value: number;
  so2Grade: level;
};

export type MainCardProps = {
  location: string;
  time: string;
  level: level;
};

export type MainCardTextProps = {
  status: string;
  message: string;
};

export type SmallCardProps = {
  title: string;
  value: string;
  level: level;
};

export type ResultsProps = {
  search: string;
  bookmark: string[];
  click: (station: string) => void;
};

export type SearchbarProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
