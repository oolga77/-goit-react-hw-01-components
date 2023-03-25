import styled from 'styled-components';
export const FriendsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  width: 600px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 20px;
  width: 400px;
  margin-bottom: 5px;
  padding-left: 25px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;

  .friend-status {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-right: 20px;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
  }

  .friend-avatar {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 100px;
    padding: 10px;
  }

  .friend-name {
    font-size: 40px;
    font-weight: 600;
    color: grey;
    margin-right: 5px;
  }
`;
