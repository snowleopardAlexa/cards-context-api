import {createContext, useReducer, useEffect} from "react"
import AppReducer from "./AppReducer"

// initial state
const initialState = {
    // arrays of movies
    watchlist: [],
    watched: [],
}

// create context api
export const GlobalContext = createContext(initialState)

// access global context from other components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // actions - tell provider what to do once we click the button
    

    // we can access global context from every component
    return (
        <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched}}>
            {props.children}
        </GlobalContext.Provider>
    )
}