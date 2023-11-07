const {
	getVgByName,
	getAllVg,
	getVgById,
	createVideogame,
} = require("../controllers/vgControllers");

const getVgHandler = async (req, res) => {
	const { name } = req.query;
	try {
		const result = name ? await getVgByName(name) : await getAllVg();
		result.length > 0
			? res.status(200).send(result)
			: res.status(404).send({ message: "Not Found" });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

const getVgByIdHandler = async (req, res) => {
	const { id } = req.params;
	try {
		const result = await getVgById(id);
		result
			? res.status(200).send(result)
			: res.status(404).send({ message: "Not Found" });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

const postVgHandler = async (req, res) => {
	console.log(req.body);
	const {
		name,
		img,
		released,
		description,
		genres,
		platforms,
		ratings,
		requirements,
		created,
	} = req.body;
	try {
		const result = await createVideogame(
			name,
			img,
			released,
			description,
			genres,
			platforms,
			ratings,
			requirements,
			created
		);
		res.status(201).json(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = {
	getVgHandler,
	getVgByIdHandler,
	postVgHandler,
};
