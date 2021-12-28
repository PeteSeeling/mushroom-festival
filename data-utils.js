
export function findFriendByName(name, friendsArray) {
    for (let friend of friendsArray) {
        if (friend.name === name) {
            return friend;
        }
    }
}
