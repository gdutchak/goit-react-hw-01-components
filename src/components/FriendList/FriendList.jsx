import { arrayOf, shape, number } from 'prop-types';
import '../FriendList/FriendList';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return <ul className="friend-list">
        <FriendListItem friends={friends}></FriendListItem>
    </ul>
}

FriendList.propType = {
    friends: arrayOf(shape({
        id: number.isRequired,
    }))
}
