// const firebase = require("firebase-admin");
require('dotenv').config();

const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// const serviceAccount = require("./private/serviceAccount.json");

initializeApp({
   // credential: firebase.credential.cert(serviceAccount)
   // credential: firebase.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS)
   credential: applicationDefault(),
});

const firestoreDb = getFirestore();
firestoreDb.settings({ ignoreUndefinedProperties: true });
// console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);

module.exports = { firestoreDb };