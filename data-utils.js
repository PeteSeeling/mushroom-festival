export default function findFriendByName(name, friends) {
    // iterate through the friends
    const friendsArray = [
        {
            name: 'Erich',
            satisfaction: 2
        },
        {
            name: 'Sarah',
            satisfaction: 3
        },
        {
            name: 'Missael',
            satisfaction: 1
        },
        {
            name: 'Soraya',
            satisfaction: 2
        }];

    // when you find a friend
    function findByName(name, friendsArray) {
        for (let item of friendsArray) {
            if (item.name === name) {
                return item;
            }
        }
    }}
