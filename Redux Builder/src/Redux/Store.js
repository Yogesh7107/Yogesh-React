import { combineReducers, legacy_createStore } from 'redux';
import themeReducer from './Theam/reducer';
import counterReducer from './Counter/reducer';


const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
});

export const store = legacy_createStore(rootReducer);


