// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
import { findFriendByName } from './data-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');


let mushroomCount = 3;

const friendData = [
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
    },
];

addFriendButton.addEventListener('click', () => {
    
    const name = document.getElementById('friend-input').value;

    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 150)}`, 
        satisfaction: 1, 
    };

    friendData.push(newFriend);
    friendInputEl.value = '';

    displayFriends();
});

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > .5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

function displayFriends() {
    friendsEl.textContent = '';

    for (let friend of friendData) {
        const friendEl = renderFriend(friend);

        friendEl.addEventListener('click', () => {
            const friendInState = findFriendByName(friend.name, friendData);

    
            if (mushroomCount === 0) {
                alert('no mushrooms left! go forage for some more');
            }
            if (mushroomCount > 0 && friendInState.satisfaction < 3) {
                friendInState.satisfaction++;
                mushroomCount--;
        
                displayFriends();
                displayMushrooms();    
            }
        });

        friendsEl.append(friendEl);
    }
}
    
function displayMushrooms() { 
    
    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) { 
        
        const mushrooms = renderMushroom();
        mushroomsEl.append(mushrooms);
    }
}

displayFriends();
displayMushrooms();
