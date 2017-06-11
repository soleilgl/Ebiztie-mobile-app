
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducer from './reducers';
import promise from './promise';
// create store for redux action and reducer, thun provide Asyc function wehn get data
// create initail state(onCompletion:()=>void), to deliver serverside data to react
export default function configureStore(onCompletion:()=>void):any {
  // const enhancer = compose(
  //   applyMiddleware(thunk, promise),
  //   devTools({
  //     name: 'nativebasekitchensink', realtime: true,
  //   }),
  // );

  const store = createStore(reducer);
  // persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
