import { createStore,applyMiddleware,combineReducers } from "redux"
import logger from 'redux-logger'
import{ movies} from "./reducers.js"


const store = createStore(combineReducers({movies}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
