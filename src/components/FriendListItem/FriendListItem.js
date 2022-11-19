import PropTypes from 'prop-types';
import {
  FriendListItemStyled,
  FriendListItemStatus,
  FriendListItemAvatar,
  FriendListItemName,
} from './FriendListItem.style';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemStyled>
      <FriendListItemStatus isOnline={isOnline} />
      <FriendListItemAvatar src={avatar} alt="User avatar" width="48" />
      <FriendListItemName>{name}</FriendListItemName>
    </FriendListItemStyled>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
