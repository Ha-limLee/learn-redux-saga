import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "@redux-saga/core";
import { helloSaga } from "./sagas";
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(helloSaga);

export const action = type => store.dispatch({ type });
