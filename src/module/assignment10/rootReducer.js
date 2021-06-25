import { combineReducers } from 'redux';
import counterReducer from './reducer';
import userListReducer from '../assignment9/reducer';

const rootReducer = combineReducers({
	counterReducer,
	userListReducer,
});

export default rootReducer;
