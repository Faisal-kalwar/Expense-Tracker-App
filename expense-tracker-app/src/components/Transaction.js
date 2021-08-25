import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Transaction = ({transaction}) => {
    const {delTransaction} = useContext(GlobalContext);

    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactiontype = transaction.transactionAmount > 0 ? 'plus' : 'minus'
    
    return (
        <li className={transactiontype}>
           {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className="delete-btn" onClick={() => delTransaction(transaction.id)}>X</button>
        </li>
    )
}
