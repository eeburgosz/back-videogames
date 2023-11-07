const app = require("./src/app");
const { sequelize } = require("./src/db");
require("dotenv").config();

const { PORT } = process.env;

app.listen(PORT, () => {
	sequelize.sync({ force: true });
	console.log(`Aplicación corriendo en el puerto ${PORT}`);
});
