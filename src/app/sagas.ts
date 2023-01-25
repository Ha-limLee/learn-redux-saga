import { all } from "redux-saga/effects";
import { watchIncrementAsync } from "../features/counter/watchIncrementAsync";

export function* helloSaga() {
    console.log('Hello Sagas!');
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
    ]);
}