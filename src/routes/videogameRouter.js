const { Router } = require("express");
const { postVgHandler, getVgByIdHandler } = require("../handlers/vgHandlers");

const videogameRouter = Router();

videogameRouter.get("/:id", getVgByIdHandler);
videogameRouter.post("/create", postVgHandler);

module.exports = videogameRouter;
