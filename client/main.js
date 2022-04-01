const friendContainer = document.querySelector('#friend-container');
const form = document.querySelector('form');

const friendsCallback = ({ data: friend }) => { 
    // console.log(friend)
    displayFriends(friend)
};
// const errCallback = err => console.log(err.response.data);

const baseURL = `http://localhost:4000/api/friends`

const getAllFriends = () => axios.get(baseURL).then(friendsCallback).catch(err => console.log(err));
const createFriend = body => axios.post(baseURL, body).then(friendsCallback).catch(err => console.log(err));
const deletefriend = id => axios.delete(`${baseURL}/${id}`).then(friendsCallback).catch(err => console.log(err));
const updatefriend = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(friendsCallback).catch(err => console.log(err));

function submitHandler(e) {
    e.preventDefault()

    let name = document.getElementById('friendName');
    let age = document.getElementById('age');
    let year = document.getElementById('year');
    
    let bodyObj = {
        name: name.value,
        age: age.value, 
        year: year.value,
    }

    createFriend(bodyObj)

    name.value = ''
    age.value = ''
    year.value = ''
}

function createFriendCard(friend) {
    console.log(friend)
    const friendDisplay = document.createElement('div');
    friendDisplay.classList.add('friend-display');
    friendDisplay.innerHTML = ` 
    <p class="friend-name">${friend.name}</p>
    <p class="friend-name">${friend.age}</p>
    <p class="friend-name">${friend.year}</p>
    <button onclick="updateFriend(${friend.id}, 'plus')">edit age +1</button>
    <button onclick="deletefriend(${friend.id})">delete</button>
    `
    friendContainer.appendChild(friendDisplay);
}



function displayFriends(arr) {
    console.log(arr)
    friendContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createFriendCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler);

getAllFriends();
