import Constants from "../constants";

const state_initial = {
    all: [],
}

const { DOCUMENTS } = Constants.actions

export const documentReducer = (state = state_initial, {type, payload}) => {
	switch (type) {
		case DOCUMENTS:
			return {
					...state, 
					all: payload,
			};

		default:
			return state;
	};
}
