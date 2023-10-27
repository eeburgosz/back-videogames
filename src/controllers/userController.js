const { firestoreDb } = require("../firebase-config");

const getUsersController = async () => {
   const querySnapshot = await firestoreDb.collection('users').get();
   return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
   }));

};


const postUserController = async (firstName, lastName, email) => {
   return await firestoreDb.collection('users').add({
      firstName, lastName, email,
   });
};

const editUserController = async (id, email) => {
   return await firestoreDb.collection('users').doc(id).update({ email });
};

const deleteUserController = async (id) => {
   return await firestoreDb.collection('users').doc(id).delete();
};

module.exports = {
   getUsersController,
   postUserController,
   editUserController,
   deleteUserController
};