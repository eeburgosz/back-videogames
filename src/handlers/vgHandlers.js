const { getVgByName, getAllVg } = require("../controllers/vgControllers");

const getVgHandler = async (req, res) => {
   const { name } = req.query;
   try {
      const result = name ? await getVgByName(name) : await getAllVg();
      // console.log(result.length);
      res.status(200).send(result);
   } catch (error) {
      res.status(500).send({ message: error.message });
   }

};

module.exports = {
   getVgHandler
};