import styled from 'styled-components';

export const TransactionItemWrapper = styled.tr`
  td {
    padding: 5px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    :last-child {
      border-right: none;
    }
    
  }
`;
