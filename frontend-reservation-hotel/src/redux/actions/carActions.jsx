import Constants from "../constants"
import axios from "axios";

const { LIST_CAR } = Constants.actions

const listCar = (data) => {
  return {
      type : LIST_CAR,
      payload : data
  };
};

export const getListCar = (guestId) => async (dispatch) => {
  const response = await axios.get(`${Constants.api}/car/${guestId}`);
  dispatch(listCar(response.data)); 
};

export const deleteCar = (carId) => async (dispatch) => {
   await axios.delete(`${Constants.api}/car/item/${carId}`);
};

export const addCar = (payload) => async (dispatch) => {
  await axios.post(`${Constants.api}/car`, payload);
};