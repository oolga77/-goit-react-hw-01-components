import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 60%;
  border-collapse: collapse;
  margin: 10px auto;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  .table-head {
    font-size: 30px;
    font-weight: 600;
  }

  .table-row {
    background-color: #1f9fbf;
    color: #ffffff;
  }

  th,
  td {
    font-size: 30px;
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #02bbd7;
    color: white;
  }
`;
