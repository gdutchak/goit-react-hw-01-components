import { arrayOf, shape, bool, string } from 'prop-types';
import '../FriendListItem/FriendListItem';

export const FriendListItem = ({ avatar, name, isOnline }) => {

    return <>
        <span className={isOnline ? "status status--active" : "status status--no-active"}>{isOnline}</span>
        <img className="friends-avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </>
}

FriendListItem.propTypes = {
    isOnline: bool.isRequired,
    avatar: string.isRequired,
    name: string.isRequired,
}