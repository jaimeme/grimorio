import { SET_MAGIAS, SET_TIMESTAMP, SET_IS_FETCHING_MAGIAS } from "./types";

export const setMagias = magias => ({
  type: SET_MAGIAS,
  payload: magias
});

export const setTimeStamp = timestamp => ({
  type: SET_TIMESTAMP,
  payload: timestamp
});

export const setIsFetchingMagias = boolean => ({
  type: SET_IS_FETCHING_MAGIAS,
  payload: boolean
});
