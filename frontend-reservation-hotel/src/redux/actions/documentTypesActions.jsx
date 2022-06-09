import Constants from "../constants"
import axios from "axios";

const { DOCUMENTS } = Constants.actions

const getDocumentsTypes = (documentsTypes) => {
  return {
      type : DOCUMENTS,
      payload : documentsTypes
  };
};

export const getAllDocumentsTypes = () => async (dispatch) => {
  const response = await axios.get(`${Constants.api}/document_type`);
  dispatch(getDocumentsTypes(response.data)); 
};
