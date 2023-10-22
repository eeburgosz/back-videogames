const firebase = require("firebase-admin");

const serviceAccount = require("./private/serviceAccount.json");

firebase.initializeApp({
   credential: firebase.credential.cert(serviceAccount)
});

module.exports = firebase;