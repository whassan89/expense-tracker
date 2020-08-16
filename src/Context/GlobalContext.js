import React, { createContext, useReducer } from 'react'
import AppReducer from './appreducer'


// INITAIL STATE 
const initailstate = {
    transactions: []
}

// CREATE CONTEXT
export const GlobalContext = createContext(initailstate)

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initailstate);

    // ACTIONS 
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}
export default GlobalProvider;