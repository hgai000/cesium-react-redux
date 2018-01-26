import { createStore } from 'redux';

const initialState = { messages: [], isFullscreen: false };

const reducer = (state, action) => {
    if (action.type === 'ADD_MESSAGE') {
        return {
            messages: state.messages.concat(action.message),
        };
    } else if (action.type === 'DELETE_MESSAGE') {
        return {
            messages: state.messages.slice(0, action.index),
            ...state.messages.slice(action.index + 1, state.messages.length)
        };
    } else if (action.type === 'CLICK') {
        return {
            messages: state.messages,
            isFullscreen: !state.isFullscreen
        }
    } else {
        return state;
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const listener = () => {
    console.log('Current state: ');
    console.log(store.getState());
};

store.subscribe(listener);

export default store;
