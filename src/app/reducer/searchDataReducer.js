export const USER_REDUCER_ACTION_RESET = 0;
export const USER_REDUCER_ACTION_SET_LAST_SEARCH = 1;

const initialState = () => ({
  lastSearch: null
});

export const searchDataReducer = (state = initialState(), {type, payload}) => {
  switch (type) {
    case USER_REDUCER_ACTION_RESET:
      return initialState();
    case USER_REDUCER_ACTION_SET_LAST_SEARCH:
      return {...state, lastSearch: payload};
    default:
      return state;
  }
};
