const req =  require ('express/lib/request')
const friends = require('./db.json')
let friendId = 4

module.exports = {

    getFriends: (req, res) => {
        res.status(200).send(friends)
    },

    createFriend: (req, res) => {
        let { name, age, year } = req.body
        let newFriend = {
            id: friendId,
            name,
            age,
            year,
        }
        friends.push(newFriend);
        res.status(200).send(friends);
        friendId++


    },

    deleteFriend: (req, res) => {
        let index = friends.findIndex(friends => friends.id === +req.params.id);
        friends.splice(index, 1);
        res.status(200).send(friends)
    },
    updatefriend: (req, res) =>{
        let { id } = req.params
        let { type } = req.body
    
        let index = friends.findIndex(friends => friends.id === +id)
    
         if (type === 'plus'){
            friends[index].age+= 1
            res.status(200).send(friends)
        }else {
            res.status(400)
        }
    }
} 