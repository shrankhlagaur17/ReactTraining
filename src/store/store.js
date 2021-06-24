import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../module/assignment10/rootReducer';

const counterLogger = createLogger();
const middleWares = compose(applyMiddleware(thunk, counterLogger));

const store = createStore(rootReducer, middleWares);

export default store;
