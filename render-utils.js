export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    const friendsEl = document.querySelector('.friends');
    // make three elements: an outer div, a place for the name, and a place for an emoji
    const outerDivEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    // add friend, name, and emoji classes to the appropriate elements
    outerDivEl.classList.add('outer-Div');
    nameEl.classList.add('name-el');
    emojiEl.classList.add('emoji-el');

    // put the friend's name in the nameEl
    nameEl.textContent = friend.name;
    emojiEl.textContent = friend.emoji;
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level

    emojiEl.textContent = friend.satisfaction =
    '😔' ;
    // append the emojiEl and nameEl to the outer div
    outerDivEl.append(nameEl, emojiEl);
    // return the outer div
    friendsEl.append(outerDivEl);

   

}