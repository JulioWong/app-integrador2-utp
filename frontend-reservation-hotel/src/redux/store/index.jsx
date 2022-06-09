import { createStore, applyMiddleware } from "redux";

import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk" 
import reducers from "../reducers"

const persistConfig = {
    key: "root",
    storage
};

const store = createStore(reducers, applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
