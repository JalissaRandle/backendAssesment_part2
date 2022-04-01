const express = require('express');
const cors = require('cors');

const { getFriends, createFriend, deleteFriend, updatefriend } = require('./controller');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/friends/', getFriends );
app.post('/api/friends', createFriend);
app.delete('/api/friends/:id', deleteFriend);
app.put('/api/friends/:id', updatefriend);

app.get("/api/compliment", (req, res) => {
    const compliments = ["Gee, you're a smart cookie!",
                       "Cool shirt!",
                       "Your Javascript skills are stellar.",
    ];
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    res.status(200).send(randomCompliment);
  });
  
  app.get("/api/fortune/", (req, res) => {
    const fortune = ["A beautiful, smart, and loving person will be coming into your life.",
         "A dubious friend may be an enemy in camouflage.",
         "A faithful friend is a strong defense.",
         "A feather in the hand is better than a bird in the air.",
         "A friend asks only for your time not your money."
        ];
    let random= Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[random];
    res.status(200).send(randomFortune);
  });
  

app.listen(4000, () => console.log('server is listening on port 4000'));