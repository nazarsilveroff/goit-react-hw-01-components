import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 250px;
  box-shadow: 0px 0px 4px 2px rgba(34, 60, 80, 0.6);
  background-color: white;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom:20px;
  .description {
  }
  .avatar {
    width: 100px;
    height: 100px;
  }
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  width: inherit;
  padding: 0;
  margin: 0;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    padding: 10px;
    border: 1px solid gray;
    background-color: #c9c9c9;
  }
  .label {
    margin-bottom: 5px;
  }
  .quantity {
  }
`;
