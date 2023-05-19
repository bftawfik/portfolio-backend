// require('dotenv').config();
const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

const { initializeApp } = require("firebase/app");
const { getDatabase, ref, onValue } = require("firebase/database");

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

let data = {};
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const dbRef = ref(db, 'pages/');

onValue(dbRef, (snapshot) => {
  data = snapshot.val();
});

app.use(cors())
app.get('/', (req, res) => res.send(data))

app.listen(port, () => console.log('bftawfik-github-io API server started on: ' + port))
