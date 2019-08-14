import { combineReducers } from "redux";

const questions = (state = [], action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: questions
});
