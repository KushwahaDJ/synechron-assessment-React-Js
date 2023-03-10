import { combineReducers } from "redux";
import movieReducer from "./movieReducer"


const reducers = combineReducers({
    movie: movieReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>