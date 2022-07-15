import Constants from "../constants"
import axios from "axios";

const { HOTELS } = Constants.actions

const getHotels = (data) => {
  return {
      type : HOTELS,
      payload : data
  };
};

export const getAllHotels = () => async (dispatch) => {
  const response = await axios.get(`${Constants.api}/hotel`);
  dispatch(getHotels(response.data)); 
};
