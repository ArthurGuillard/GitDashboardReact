import React, {createContext, useReducer} from "react";
import {Utils} from "../Utils";

export const SEARCH_HISTORY_REDUCER_ACTION_RESET = 0;
export const SEARCH_HISTORY_REDUCER_ACTION_PUSH = 1;

const initialState = () => ({
  history: Utils.getSearchHistoryFromLocalStorage()
});

const SearchHistoryContext = createContext({});
const searchHistoryReducer = (state = initialState(), {type, payload}) => {
  switch (type) {
    case SEARCH_HISTORY_REDUCER_ACTION_RESET:
      return initialState();
    case SEARCH_HISTORY_REDUCER_ACTION_PUSH:
      Utils.addSearchDataToHistory(payload, state.history);
      return {...state};
    default:
      return state;
  }
};

const SearchHistoryContextProvider = (props) => {
  const [state, dispatch] = useReducer(searchHistoryReducer, initialState());
  const value = {state, dispatch};

  return (
    <SearchHistoryContext.Provider value={value}>{props.children}</SearchHistoryContext.Provider>
  );
};

export {SearchHistoryContext, SearchHistoryContextProvider}