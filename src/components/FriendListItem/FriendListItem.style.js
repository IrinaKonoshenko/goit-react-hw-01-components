import styled from 'styled-components';

export const FriendListItemStyled = styled.li`
  display: flex;
  gap: 10px;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.4);
  align-items: center;
`;
export const FriendListItemStatus = styled.span`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const FriendListItemAvatar = styled.img`
  border-radius: 5px;
  border: 1px solid rgb(131, 129, 129);
  padding: 5px;
`;
export const FriendListItemName = styled.p`
  font-size: 22px;
  font-weight: 600;
`;
