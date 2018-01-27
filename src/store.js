import { createStore } from 'redux';
import uuidv4 from 'uuid';

const initialState = { messages: [], isFullscreen: false };

const reducer = (state, action) => {
    if (action.type === 'ADD_MESSAGE') {
        const newMessage = {
            text: action.text,
            timestamp: Date.now(),
            id: uuidv4()
        };

        return {
            messages: state.messages.concat(newMessage),
        };

    } else if (action.type === 'DELETE_MESSAGE') {
        return {
            messages: state.messages.filter(msg => msg.id !== action.id)
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
