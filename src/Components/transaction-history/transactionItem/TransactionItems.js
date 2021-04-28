import React from 'react';
import { TransactionItemWrapper } from './transactionItemStyle';


const TransactionItems = ({ transaction }) => {
  return (
    <>
      <TransactionItemWrapper key={transaction.id}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </TransactionItemWrapper>
    </>
  );
};

export default TransactionItems;