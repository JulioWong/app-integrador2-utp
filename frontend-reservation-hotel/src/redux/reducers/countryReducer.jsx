import Constants from "../constants";

const state_initial = {
    all: [],
}

const { COUNTRIES } = Constants.actions

export const countryReducer = (state = state_initial, {type, payload}) => {
	switch (type) {
		case COUNTRIES:
			return {
					...state, 
					all: payload,
			};

		default:
			return state;
	};
}
