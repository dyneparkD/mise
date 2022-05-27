import { Dispatch, ReactNode, SetStateAction } from "react";

// type level = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
type level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type dataMiseAPI = {
  co: string;
  coLv4: level;
  coLv8: level;
  dataTime: string;
  maxLv4: level;
  maxLv8: level;
  no2: string;
  no2Lv4: level;
  no2Lv8: level;
  o3: string;
  o3Lv4: level;
  o3Lv8: level;
  pm10: string;
  pm10Lv4: level;
  pm10Lv8: level;
  pm25: string;
  pm25Lv4: level;
  pm25Lv8: level;
  so2: string;
  so2Lv4: level;
  so2Lv8: level;
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

export type LocalNavbarProps = {
  current: string;
};
export type SlideSwitchProps = {
  isChecked: boolean;
  toggle: () => void;
};
