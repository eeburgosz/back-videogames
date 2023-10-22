const { Genres } = require("../db");
const { infoApiGenres } = require("../utils/api");

const getAllGenres = async () => {
   const dbGenres = await Genres.findAll();
   if (dbGenres.length === 0) {
      const genres = await infoApiGenres();
      const insertedGenres = [];
      for (const genreName of genres) {
         const [genre] = await Genres.findOrCreate({
            where: {
               name: genreName
            }
         });
         insertedGenres.push(genre);
      }
      return insertedGenres;
   }
   return await Genres.findAll();
};

module.exports = {
   getAllGenres
};