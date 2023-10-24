const { Router } = require('express');
const { getVgHandler, getVgByIdHandler } = require("../handlers/vgHandlers");


const videogamesRouter = Router();

videogamesRouter.get('/', getVgHandler);

module.exports = videogamesRouter;