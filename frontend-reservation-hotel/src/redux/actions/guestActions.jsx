import Constants from "../constants"
import axios from "axios";

const { REGISTER_GUEST, CURRENT_GUEST } = Constants.actions

const newGuest = (dataNewGuest) => {
  return {
      type : REGISTER_GUEST,
      payload : dataNewGuest
  };
};

const currentGuest = (guest) => {
  return {
      type : CURRENT_GUEST,
      payload : guest
  };
};

export const setGuest = (payload) => async (dispatch) => {
  const response = await axios.post(`${Constants.api}/guest`, payload);
  dispatch(newGuest(response.data)); 
};

export const loginGuest = (payload) => async (dispatch) => {
  const response = await axios.post(`${Constants.api}/guest/login`, payload);
  dispatch(currentGuest(response.data)); 
};

export const logoutGuest = () => (dispatch) => {
  dispatch(currentGuest({})); 
};
