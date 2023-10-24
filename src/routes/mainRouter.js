const { Router } = require('express');
const videogameRouter = require("./videogameRouter");
const videogamesRouter = require("./videogamesRouter");
const genresRouter = require("./genresRouter");
const userRouter = require("./userRouter");

const mainRouter = Router();

mainRouter.use('/videogame', videogameRouter);
mainRouter.use('/videogames', videogamesRouter);
mainRouter.use('/genres', genresRouter);
mainRouter.use('/users', userRouter);

module.exports = mainRouter;