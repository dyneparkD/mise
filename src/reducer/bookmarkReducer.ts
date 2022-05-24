type updateAction = {
  type: "ADD_BOOKMARK" | "REMOVE_BOOKMARK";
  payload: string;
};

type setAction = {
  type: "SET_BOOKMARK";
  payload: string[];
};

type resetAction = {
  type: "CLEAR_BOOKMARK";
};

type action = updateAction | setAction | resetAction;

export const bookmarkReducer = (state: string[], action: action) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return [...state, action.payload];
    case "REMOVE_BOOKMARK":
      return state.filter((x) => x !== action.payload);
    case "SET_BOOKMARK":
      return [...action.payload];
    case "CLEAR_BOOKMARK":
      return [];
    default:
      return state;
  }
};
