// const firebase = require("firebase-admin");
require('dotenv').config();
const serviceAccount = require("./private/serviceAccount.json");

const { initializeApp } = require("firebase-admin/app");
const firebase = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");


initializeApp({
   credential: firebase.credential.cert(serviceAccount),
});

const firestoreDb = getFirestore();
firestoreDb.settings({ ignoreUndefinedProperties: true });

module.exports = { firestoreDb };