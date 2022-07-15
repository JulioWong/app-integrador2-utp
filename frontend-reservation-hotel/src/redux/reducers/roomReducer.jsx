import Constants from "../constants";

const state_initial = {
    availables: [],
    detail: {},
    infoSelected: {}
}

const { ROOMS, ROOM_DETAIL, SELECTED_INFO } = Constants.actions

export const roomReducer = (state = state_initial, {type, payload}) => {
	switch (type) {
		case ROOMS:
			return {
					...state, 
					availables: payload,
			};

    case SELECTED_INFO:
      return {
          ...state, 
          infoSelected: payload,
      };

    case ROOM_DETAIL:
      return {
          ...state, 
          detail: payload,
      };

		default:
			return state;
	};
}
