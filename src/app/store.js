import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export const action = type => store.dispatch({ type });
