const { Sequelize } = require("sequelize");
const VideogamesModel = require("./models/Videogames");
const GenresModel = require("./models/Genres");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE_URL } = process.env;

const sequelize =
	process.env.NODE_ENV === "production"
		? new Sequelize(DATABASE_URL, {
				logging: false,
				dialect: "postgres",
				native: false,
				ssl: true,
				dialectOptions: {
					ssl: {
						require: true,
						rejectUnauthorized: false,
					},
					keepAlive: true,
				},
				schema: "videogames_schema",
		  })
		: new Sequelize(
				`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`,
				{ logging: false }
		  );

VideogamesModel(sequelize);
GenresModel(sequelize);

const { Videogames, Genres } = sequelize.models;

const VgGenres = sequelize.define("VgGenres", {}, { timestamps: false });
Videogames.belongsToMany(Genres, { through: VgGenres });
Genres.belongsToMany(Videogames, { through: VgGenres });

module.exports = {
	sequelize,
	...sequelize.models,
};
