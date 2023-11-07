const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"Videogames",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				defaultValue: () => Math.floor(1000000 + Math.random() * 9000000),
				allowNull: false,
				unique: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			img: {
				type: DataTypes.STRING,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			platforms: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				allowNull: false,
			},
			requirements: {
				type: DataTypes.JSON,
			},
			released: {
				type: DataTypes.STRING,
			},
			ratings: {
				type: DataTypes.JSON,
			},
			created: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{ timestamps: false }
	);
};
