// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const redux = require('redux')


const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('initial state ', store.getState())
const unsbscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
// ReactDOM.render(<App />, document.getElementById('root'));
// unsbscribe()
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
