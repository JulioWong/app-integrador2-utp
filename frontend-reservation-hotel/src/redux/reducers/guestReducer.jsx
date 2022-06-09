import Constants from "../constants";

const state_initial = {
    newGuest: {},
    currentGuest: {}
}

const { REGISTER_GUEST, CURRENT_GUEST } = Constants.actions

export const guestReducer = (state = state_initial, {type, payload}) => {
	switch (type) {
		case REGISTER_GUEST:
			return {
					...state, 
					newGuest: payload,
			};
    
    case CURRENT_GUEST:
      return {
        ...state, 
        currentGuest: payload,
    };

		default:
			return state;
	};
}
