const express = require('express');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const firebase = require("firebase");
var admin = require("firebase-admin");

var serviceAccount = require("../firebase-key.json");

admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://emergency193-d62b0.firebaseio.com"
});

global.db = admin.firestore();

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

app.listen(3000,()=>{
    console.log('Server started on port 3000');
});