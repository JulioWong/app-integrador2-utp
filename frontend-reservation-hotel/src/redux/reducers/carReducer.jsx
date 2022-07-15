import Constants from "../constants";

const state_initial = {
    all: [],
}

const { LIST_CAR } = Constants.actions

export const carReducer = (state = state_initial, {type, payload}) => {
	switch (type) {
		case LIST_CAR:
			return {
					...state, 
					all: payload,
			};

		default:
			return state;
	};
}
