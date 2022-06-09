import { combineReducers } from "redux";
import { countryReducer } from "./countryReducer";
import { documentReducer } from "./documentTypeReducer";
import { guestReducer } from "./guestReducer";

const reducers = combineReducers({ 
  countries: countryReducer,
  documentsTypes: documentReducer,
  guest: guestReducer
});

export default reducers;
