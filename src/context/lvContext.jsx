import { createContext, useEffect, useState } from "react";

export const lvContext = createContext();

export const LvContextProvider = ({ children }) => {
  const initial = true;
  const getLocal = () => {
    const local = localStorage.getItem("isLv8");
    return local ? JSON.parse(local) : initial;
  };

  const [isLv8, setIsLv8] = useState(getLocal());

  function toggle() {
    setIsLv8((pre) => !pre);
  }

  useEffect(() => {
    localStorage.setItem("isLv8", JSON.stringify(isLv8));
  }, [isLv8]);

  return (
    <lvContext.Provider value={{ isLv8, toggle }}>
      {children}
    </lvContext.Provider>
  );
};
