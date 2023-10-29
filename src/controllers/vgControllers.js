const { Op } = require("sequelize");
const { Videogames, Genres } = require("../db");
const { infoApiVg, infoApiPlatforms } = require("../utils/api");

// const { firestoreDb } = require("../firebase-config");

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
   // const querySnapshot = await firestoreDb.collection('users').get();
   // console.log(querySnapshot.docs[0].data());
   // console.log(await infoApiPlatforms());
   return await Videogames.findAll({
      include: [
         {
            model: Genres
         }
      ]
   });
};

const getVgByName = async (name) => {
   const exist = await Videogames.findAll({
      where: {
         name: {
            [Op.iLike]: `%${name}%`
         }
      }, include: [
         {
            model: Genres,
         }
      ]
   });
   if (exist.length > 0) return exist;
   else return [];
};


const getVgById = async (id) => {
   const exist = await Videogames.findByPk(id, {
      include: [{ model: Genres }]
   });
   if (exist) return exist;
   else return {};
};

module.exports = {
   getAllVg,
   getVgByName,
   getVgById
};

