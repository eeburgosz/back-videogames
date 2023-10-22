const { Router } = require('express');
const { getVgHandler, getVgByIdHandler } = require("../handlers/vgHandlers");


const videogameRouter = Router();

videogameRouter.get('/', getVgHandler);
videogameRouter.get('/:id', getVgByIdHandler);

module.exports = videogameRouter;