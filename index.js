// require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const firebase = require("firebase");

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

let data = {};

firebase.initializeApp(firebaseConfig);
let pages = firebase.database().ref("pages/");
pages.on('value', function(snapshot) {
  data = snapshot.val();
})

// console.log(process.env)
app.get('/', (req, res) => res.send(data))

app.listen(port, () => console.log('todo list RESTful API server started on: ' + port))
