import React, { useContext } from 'react'
// import React , { useContext } from 'react'
// import TransactionList from './transactionlist';
import { GlobalContext } from '../Context/GlobalContext'

function Transaction({ transactions }) {

    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transactions.amount < 0 ? '-' : '+';


    return (
        <>
            <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
                {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span><button onClick={() => deleteTransaction(transactions.id)} className="delete-btn">x</button>
            </li>
        </>    
    );
}
export default Transaction;