import { combineReducers } from 'redux';
import counterReducer from './reducer';

const rootReducer = combineReducers({
	counterReducer
});

export default rootReducer;
