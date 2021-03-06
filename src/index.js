import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { GET_ANIMALS, ADD_ANIMAL } from './actions';
import { textToEmoji } from './utils/utils'



const reducer = ( state={ animals: [] }, action ) => {
    switch(action.type) {
        case GET_ANIMALS:
        return { animals: action.animals };

        case ADD_ANIMAL:
        return { animals: [...state.animals, action.animal] };

        default:
        return state;
    }
}


const store = createStore(reducer, applyMiddleware(textToEmoji));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
