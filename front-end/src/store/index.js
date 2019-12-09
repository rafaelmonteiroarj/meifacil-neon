import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';
import { loadState, saveState } from './localStorage';

const middlewares = [];
const localStorageState = loadState();
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware, loggerMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducers, localStorageState, composer);

store.subscribe(() => {
  saveState(store.getState());
});

sagaMiddleware.run(sagas);


export default store;
