// const firebase = require("firebase-admin");
require('dotenv').config();
const { GOOGLE_APPLICATION_CREDENTIALS } = process.env;

const { initializeApp, applicationDefault } = require("firebase-admin/app");
const firebase = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");


initializeApp({
   credential: firebase.credential.cert(GOOGLE_APPLICATION_CREDENTIALS),
});

const firestoreDb = getFirestore();
firestoreDb.settings({ ignoreUndefinedProperties: true });

module.exports = { firestoreDb };