const app = require("./src/app");
const { sequelize } = require("./src/db");

const PORT = 3001;

app.listen(PORT, () => {
   sequelize.sync({ alter: true });
   console.log(`Aplicación corriendo en el puerto ${PORT}`);
});