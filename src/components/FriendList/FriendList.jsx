import { arrayOf, shape, number } from 'prop-types';
import '../FriendList/FriendList';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return <ul className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) =>
            <li className="friends-item" key={id}>
                <FriendListItem avatar={avatar} name={name} isOnline={isOnline}></FriendListItem>
            </li>)}
    </ul>
}

FriendList.propType = {
    friends: arrayOf(shape({
        id: number.isRequired,
    }))
}
