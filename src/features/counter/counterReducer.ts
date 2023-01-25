import { RootState } from "../../app/store";

type ActionType =
    | 'INCREMENT'
    | 'INCREMENT_ASYNC'
    | 'INCREMENT_IF_ODD'
    | 'DECREMENT';

type Action = {
    type: ActionType;
};

export default function counter(state = 0, action: Action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'INCREMENT_IF_ODD':
            return (state % 2 !== 0) ? state + 1 : state;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export const selectCount = (state: RootState) => state.counter;
