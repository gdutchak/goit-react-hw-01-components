import { arrayOf, shape, bool, string } from 'prop-types';
import '../FriendListItem/FriendListItem';

export const FriendListItem = ({ friends }) => {
    return friends.map(({ id, avatar, name, isOnline }) => <li className="friends-item" key={id}>
        {isOnline ? <span className="status status--active">{isOnline}</span> : <span className="status status--no-active">{isOnline}</span>}
        <img className="friends-avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>)
}

FriendListItem.propTypes = {
    friends: arrayOf(shape({
        isOnline: bool.isRequired,
        avatar: string.isRequired,
        name: string.isRequired,
    }))
}