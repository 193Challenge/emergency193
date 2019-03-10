
var admin = require("firebase-admin");

var serviceAccount = require("../firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://emergency193-d62b0.firebaseio.com"
});

module.exports = admin.firestore();