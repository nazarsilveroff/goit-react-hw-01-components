import React from 'react';

import TransactionItems from './transactionItem/TransactionItems';
import { TransactionWrapper } from './transactionStyle';
const Transaction = ({ items }) => {
  return (
    <>
    <TransactionWrapper>
      
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <TransactionItems transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
      </TransactionWrapper>
      </>
  );
};

export default Transaction;