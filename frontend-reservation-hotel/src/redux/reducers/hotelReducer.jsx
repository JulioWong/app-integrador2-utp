import Constants from "../constants";

const state_initial = {
    all: [],
}

const { HOTELS } = Constants.actions

export const hotelReducer = (state = state_initial, {type, payload}) => {
	switch (type) {
		case HOTELS:
			return {
					...state, 
					all: payload,
			};

		default:
			return state;
	};
}
