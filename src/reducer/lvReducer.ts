type action = {
  type: "TRUE" | "FALSE";
};

export const lvReducer = (state: boolean, action: action) => {
  switch (action.type) {
    case "TRUE":
      return true;
    case "FALSE":
      return false;
    default:
      return state;
  }
};
