const { getAllGenres } = require("../controllers/genresControllers");

const getGenresHandler = async (req, res) => {
   try {
      const result = await getAllGenres();
      res.status(200).send(result);
   } catch (error) {
      res.status(500).send({ message: error.message });
   }
};

module.exports = {
   getGenresHandler
};