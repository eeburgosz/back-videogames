const { Router } = require("express");
const {
	postVgHandler,
	getVgByIdHandler,
	postUserHandler,
} = require("../handlers/vgHandlers");
const { checkActiveUser } = require("../middlewares/auth");

const videogameRouter = Router();

// videogameRouter.post("/create", async (req, res) => {
// 	console.log(req.body);
// });

videogameRouter.get("/:id", getVgByIdHandler);
videogameRouter.post("/create", postVgHandler);

module.exports = videogameRouter;
