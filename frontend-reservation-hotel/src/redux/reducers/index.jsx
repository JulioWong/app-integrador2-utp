import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
import { countryReducer } from "./countryReducer";
import { documentReducer } from "./documentTypeReducer";
import { guestReducer } from "./guestReducer";
import { hotelReducer } from "./hotelReducer";
import { roomReducer } from "./roomReducer";

const reducers = combineReducers({ 
  countries: countryReducer,
  hotel: hotelReducer,
  documentsTypes: documentReducer,
  guest: guestReducer,
  room: roomReducer,
  car: carReducer
});

export default reducers;
