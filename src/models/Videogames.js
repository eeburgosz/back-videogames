const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   sequelize.define("Videogames", {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         startAt: 860000
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      requirements: {
         type: DataTypes.JSON,
         allowNull: false,
      },
      platforms: {
         type: DataTypes.ARRAY(DataTypes.JSONB),
         allowNull: false,
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