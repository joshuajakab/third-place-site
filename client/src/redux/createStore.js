import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddle from 'redux-saga';


import rootReducer from './rootReducer';
import userSagas from './User/user.sagas';

const sagaMiddleware = createSagaMiddle();

export const middlewares = [thunk, sagaMiddleware, logger ];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(userSagas);



export default store;