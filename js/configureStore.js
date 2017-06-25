
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from './reducers';
import promise from './promise';
// create store for redux action and reducer, thunk provide Asyc function when get data
// create initail state(onCompletion:()=>void), to deliver serverside data to react
const store = createStore(reducer, undefined, applyMiddleware(thunk));

export default store;
