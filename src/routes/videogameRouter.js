const { Router } = require('express');
const { getVgHandler } = require("../handlers/vgHandlers");

const videogameRouter = Router();

videogameRouter.get('/', getVgHandler);

module.exports = videogameRouter;