
import { createStore, applyMiddleware, combineReducers } from 'redux'
import user from './user';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const appReducer = {
  user
}
const store = createStore(
  combineReducers(appReducer),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)
export default  store;
