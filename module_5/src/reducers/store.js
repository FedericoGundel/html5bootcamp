import { createStore,combineReducers } from "redux"

import{ moviesReducer,movies} from "./reducers.js"


const store = createStore(combineReducers({  movies }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe =( () =>{
    console.log("store updated",store.getState())
    }) 
export default store
