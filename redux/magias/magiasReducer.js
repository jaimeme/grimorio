import {
  SET_MAGIAS,
  SET_TIMESTAMP,
  SET_IS_FETCHING_MAGIAS,
  SET_HAS_FETCHED_MAGIAS
} from "./types";

const initialState = {
  magias: [],
  buscadoTimeStamp: null,
  isFetching: false,
  hasFetchedMagias: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MAGIAS:
      return { ...state, magias: action.payload, hasFetchedMagias: true };
    case SET_TIMESTAMP:
      return {
        ...state,
        buscadoTimeStamp: action.payload,
        hasFetchedMagias: true
      };
    case SET_IS_FETCHING_MAGIAS:
      return { ...state, isFetching: action.payload };
    case SET_HAS_FETCHED_MAGIAS:
      return { ...state, hasFetchedMagias: action.payload };
    default:
      return state;
  }
};
