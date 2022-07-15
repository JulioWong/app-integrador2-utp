import Constants from "../constants"
import axios from "axios";

const { ROOMS, SELECTED_INFO, ROOM_DETAIL } = Constants.actions

const getAvailableRooms = (data) => {
  return {
      type : ROOMS,
      payload : data
  };
};

const getRoomDetail = (data) => {
  return {
    type: ROOM_DETAIL,
    payload: data
  }
}

export const getAvailableRoom = (hotelId, payload) => async (dispatch) => {
  const response = await axios.post(`${Constants.api}/hotel/${hotelId}/room`, payload);
  dispatch(getAvailableRooms(response.data)); 
};

export const infoSelected = ({hotel, since, until}) => (dispatch) => {
  dispatch({
    type: SELECTED_INFO,
    payload: {hotel, since, until}
  })
}

export const getRoom = (id) => async (dispatch) => {
  const response = await axios.get(`${Constants.api}/room/${id}`);
  dispatch(getRoomDetail(response.data)); 
}
