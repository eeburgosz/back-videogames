// const firebase = require("firebase-admin");
require('dotenv').config();

const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp({
   credential: applicationDefault(),
});

const firestoreDb = getFirestore();
firestoreDb.settings({ ignoreUndefinedProperties: true });

module.exports = { firestoreDb };