const { Router } = require("express");
const { postVgHandler, getVgByIdHandler, postUserHandler } = require("../handlers/vgHandlers");
const { checkActiveUser } = require("../middlewares/auth");

const videogameRouter = Router();

videogameRouter.get('/:id', getVgByIdHandler);
videogameRouter.post('/', checkActiveUser, postVgHandler);

module.exports = videogameRouter;