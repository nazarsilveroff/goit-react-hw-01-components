import styled from 'styled-components';

export const TransactionWrapper = styled.table`
  margin: 0 auto;
  width: 400px;
  background-color: #ffffff;
  text-align: center;

  thead {
    width: inherit;
  }
  tr {
    :nth-child(2n + 1) {
      background-color: #a0a0a0;
    }
  }

  tbody {
    width: inherit;
  }
  th {
    background-color: #74fcde;
    padding: 10px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    :last-child {
      border-right: none;
    }
  }
`;
