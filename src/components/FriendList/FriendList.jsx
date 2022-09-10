import { number, bool, string } from 'prop-types';
import '../FriendList/FriendList';

export const FriendList = ({ friends }) => {
    return (<ul className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => <li className="friends-item" key={id}>
            {isOnline ? <span className="status status--active">{isOnline}</span> : <span className="status status--no-active">{isOnline}</span>}
            <img className="friends-avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>)}
    </ul>)
}

FriendList.propTypes = {
    id: number,
    isOnline: bool,
    avatar: string,
    name: string,
}
