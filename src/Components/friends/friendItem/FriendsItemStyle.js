import styled from 'styled-components';

export const FriendItemWrapper = styled.li`
  width: 250px;
  box-shadow: 0px 0px 4px 2px rgba(34, 60, 80, 0.6);
  background-color: #fbfff8;
  width: inherit;
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  .status {
    padding: 10px;
    margin: 10px;
    display: block;
    border-radius: 50%;
    background-color: ${({ isOnline }) => (isOnline ? '#a7fc6e' : 'gray')};
  }
  .avatar {
    padding: 5px;
  }
  .name {
    padding: 10px;
  }
`;
