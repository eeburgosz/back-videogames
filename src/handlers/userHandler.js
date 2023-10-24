const { postUserController, editUserController, deleteUserController, getUsersController } = require("../controllers/userController");

const getUsersHandler = async (req, res) => {
   try {
      const users = await getUsersController();
      res.status(200).send(users);
   } catch (error) {
      res.status(500).send({ message: error.message });
   }
};

const postUserHandler = async (req, res) => {
   const { firstName, lastName, email } = req.body;
   try {
      const user = await postUserController(firstName, lastName, email);
      res.status(201).send(user);
   } catch (error) {
      res.status(500).send({ error: error.message });
   }
};

const editUserHandler = async (req, res) => {
   const { id } = req.params;
   const { email } = req.body;
   try {
      await editUserController(id, email);
      res.status(202).send("User updated successfully");
   } catch (error) {
      res.status(500).send({ error: error.message });
   }
};

const deleteUserHandler = async (req, res) => {
   const { id } = req.params;
   try {
      await deleteUserController(id);
      res.send({ message: "User deleted" });
   } catch (error) {
      res.status(500).send({ error: error.message });
   }
};

module.exports = {
   postUserHandler,
   editUserHandler,
   deleteUserHandler,
   getUsersHandler
};