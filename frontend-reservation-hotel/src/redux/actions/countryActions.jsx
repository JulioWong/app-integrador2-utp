import Constants from "../constants"
import axios from "axios";

const { COUNTRIES } = Constants.actions

const getCountries = (countries) => {
  return {
      type : COUNTRIES,
      payload : countries
  };
};

export const getAllCountries = () => async (dispatch) => {
  const response = await axios.get(`${Constants.api}/country`);
  dispatch(getCountries(response.data)); 
};
