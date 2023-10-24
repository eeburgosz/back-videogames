const { Router } = require('express');
const { postUserHandler, editUserHandler, deleteUserHandler, getUsersHandler } = require("../handlers/userHandler");

const userRouter = Router();

userRouter.get('/', getUsersHandler);
userRouter.post('/create-user', postUserHandler);
userRouter.patch('/edit-user/:id', editUserHandler);
userRouter.delete('/delete-user/:id', deleteUserHandler);

module.exports = userRouter;