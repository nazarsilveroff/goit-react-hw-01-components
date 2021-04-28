import styled from 'styled-components';

export const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  padding: 10px;
  :nth-child(1) {
    background-color: ${'#' +
    Math.floor(Math.random() * 16777215).toString(16)};
  }
  :nth-child(2) {
    background-color: ${'#' +
    Math.floor(Math.random() * 16777215).toString(16)};
  }
  :nth-child(3) {
    background-color: ${'#' +
    Math.floor(Math.random() * 16777215).toString(16)};
  }
  :nth-child(4) {
    background-color: ${'#' +
    Math.floor(Math.random() * 16777215).toString(16)};
  }
  :nth-child(5) {
    background-color: ${'#' +
    Math.floor(Math.random() * 16777215).toString(16)};
  }
  .label {
    margin-bottom: 5px;
  }
  .percentage {
  }
`;
