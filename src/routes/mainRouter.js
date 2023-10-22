const { Router } = require('express');
const videogameRouter = require("./videogameRouter");
const genresRouter = require("./GenresRouter");

const mainRouter = Router();

mainRouter.use('/videogames', videogameRouter);
mainRouter.use('/genres', genresRouter);

module.exports = mainRouter;