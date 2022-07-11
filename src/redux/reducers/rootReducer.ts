import {combineReducers} from "redux";
import httpReducer from './http/httpSlice';
import formsReducer from './forms/formsSlice';

/**
 * This is the root reducer which combines all the reducers
 * We include all the reducers here
 */
export const rootReducer = combineReducers({
    http: httpReducer,
    forms: formsReducer,
});
