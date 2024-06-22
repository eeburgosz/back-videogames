const app = require("./src/app");
const { sequelize } = require("./src/db");
require("dotenv").config();

// const { PORT } = process.env;
const PORT = 4001;

app.listen(PORT, () => {
	sequelize.sync({ alter: true });
	console.log(`Aplicación corriendo en el puerto ${PORT}`);
});
