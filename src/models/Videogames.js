const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   sequelize.define("Videogames", {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         startAt: 950000
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
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
         type: DataTypes.STRING
      },
      ratings: {
         type: DataTypes.JSON,
      },
      created: {
         type: DataTypes.BOOLEAN,
         defaultValue: false
      }
   }, { timestamps: false });
};