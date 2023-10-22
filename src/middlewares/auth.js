const firebase = require("../firebase-config");

const checkActiveUser = async (req, res, next) => {
   const { token } = req.query;
   try {
      const decodedValue = await firebase.auth().verifyIdToken(token);
      if (decodedValue) {
         req.uid = decodedValue.uid;
         return next();
      }
      res.status(410).send({ message: "Session no longer active" });
   } catch (error) {
      res.status(500).send({ message: "Internal server error" });
   }
};

module.exports = {
   checkActiveUser
};