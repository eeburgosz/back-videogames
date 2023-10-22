const { Videogames, Genres } = require("../db");
const { infoApiVg } = require("../utils/api");

const createVideogamesAndAssociateGenres = async () => {
   const data = await Videogames.findAll();
   if (data.length === 0) {
      const vgData = await infoApiVg();
      try {
         const vgInstances = await Videogames.bulkCreate(vgData);
         const genresMap = new Map();
         for (const vg of vgData) {
            const genres = vg.genres;
            for (const genreName of genres) {
               if (!genresMap.has(genreName)) {
                  const genreInstance = await Genres.findOrCreate({
                     where: { name: genreName },
                  });
                  genresMap.set(genreName, genreInstance[0]);
               }
            }
         }
         for (const vgInstance of vgInstances) {
            const genres = vgData.find(vg => vg.id === vgInstance.id).genres;
            await vgInstance.setGenres(genres.map(genreName => genresMap.get(genreName).id));
         }
         console.log("Videojuegos y géneros creados y asociados correctamente");
         return await Videogames.findAll();
      } catch (error) {
         console.error('Error al crear y asociar videojuegos y géneros:', error);
      }
   }
};

createVideogamesAndAssociateGenres();

const getAllVg = async () => {
   return await Videogames.findAll({
      include: [
         {
            model: Genres
         }
      ]
   });
};

const getVgByName = async (name) => {

};
module.exports = {
   getAllVg,
   getVgByName
};