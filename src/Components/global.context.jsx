import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "./Reducers/reducer";
import { fakeRecipes } from "./utils/fakeData";

const ContextGlobal = createContext();
const initialState = {theme: false, data: [], favs: [], recipeSelected: {}};


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //Petición a la API
    // CAMBIAR LA URL CUANDO FUNCIONE
    const url = [];
    fakeRecipes.map((item, index) => {
        url[index] = item;
    })
    /*
    const url = `${fakeRecipes}`;
    
    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_LIST', payload: res.data}))
    }, []);*/
    useEffect(() => {
        
        dispatch({type: 'GET_LIST', payload: url })
    }, []);
    console.log(state);
    
  return (
    <ContextGlobal.Provider value={{}}>
        { children }
    </ContextGlobal.Provider>
  )
}

export default ContextProvider
export const useContextGlobal = () => useContext(ContextGlobal);