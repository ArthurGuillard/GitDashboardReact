import {Configuration} from "./Config";
import * as moment from "moment";

export class Utils {
  static addSearchDataToHistory = (newSearchData, history) => {
    console.dir(history);
    if (history.length >= Configuration.localStorage.SEARCH_HISTORY_MAX_ELEMENT) {
      history.pop();
    }
    console.dir(history);
    history.unshift(newSearchData);
    console.dir(history);
    localStorage.setItem(Configuration.localStorage.SEARCH_HISTORY_KEY, JSON.stringify(history));
  };

  static getSearchHistoryFromLocalStorage = () => {
    const history = localStorage.getItem(Configuration.localStorage.SEARCH_HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  };

  static timestampToFormattedDate = (timestamp) => {
    return moment(timestamp).format('DD/MM/YYYY HH:mm:ss');
  };
}
