import { Dispatch, ReactNode, SetStateAction } from "react";

// type level = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
type level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type dataMiseAPI = {
  dataTime: string;
  khaiValue: number;
  khaiGrade: level;
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
  isLoading: boolean;
};

export type MainCardTextProps = {
  status: string;
  message: string;
};

export type SmallCardProps = {
  title: string;
  value: string;
  level: level;
  isLoading: boolean;
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

export type NavbarProps = {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
};

export type ModalProps = {
  isOpen: boolean;
  setIsOpen: (showSidebar: boolean) => void;
  children: ReactNode;
};
