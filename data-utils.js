// export function findbyName(name, friends) {
    // iterate through the friends
    
    // when you find a friend
export function findFriendByName(name, friendsArray) {
    for (let friend of friendsArray) {
        if (friend.name === name) {
            return friend;
        }
    }
}
