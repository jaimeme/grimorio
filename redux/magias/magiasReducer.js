import { SET_MAGIAS, SET_TIMESTAMP, SET_IS_FETCHING_MAGIAS } from "./types";

const initialState = {
  magias: [],
  buscadoTimeStamp: null,
  isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MAGIAS:
      return { ...state, magias: action.payload };
    case SET_TIMESTAMP:
      return { ...state, buscadoTimeStamp: action.payload };
    case SET_IS_FETCHING_MAGIAS:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};
