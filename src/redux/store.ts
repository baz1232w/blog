import {combineReducers,applyMiddleware,legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import {mainPageReducer} from "./reducers/MainPage/mainPageReducer";

const rootReducer = combineReducers({
    mainPage:mainPageReducer
})

export type RootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer,applyMiddleware(thunk))

