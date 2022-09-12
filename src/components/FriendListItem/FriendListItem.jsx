import { arrayOf, shape, bool, string } from 'prop-types';
import '../FriendListItem/FriendListItem';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <>
        {isOnline ? <span className="status status--active">{isOnline}</span>
            : <span className="status status--no-active">{isOnline}</span>}
        <img className="friends-avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </>
}

FriendListItem.propTypes = {
    friends: arrayOf(shape({
        isOnline: bool.isRequired,
        avatar: string.isRequired,
        name: string.isRequired,
    }))
}