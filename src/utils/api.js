const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();
const { API_KEY } = process.env;

const stripHTML = (text) => {
   const $ = cheerio.load(text);
   const newText = $.text();
   return newText.replace(/[\t\n]/g, '');
};

const infoApiVg = async () => {
   const noInfo = "No information available";
   const apiData = [];
   let URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
   for (let i = 0; i < 8; i++) {
      const { results, next } = (await axios.get(URL)).data;
      results.map(async vg => {
         const descURL = `https://api.rawg.io/api/games/${vg.id}?key=${API_KEY}`;
         const descInfo = (await axios.get(descURL)).data;
         apiData.push({
            id: vg.id,
            img: vg.background_image,
            name: vg.name,
            description: stripHTML(descInfo.description_raw || noInfo),
            requirements: {
               minimum: stripHTML(vg.platforms.find(platform =>
                  platform.requirements_en)?.requirements_en.minimum || noInfo),
               recommended: stripHTML(vg.platforms.find(platform =>
                  platform.requirements_en)?.requirements_en.recommended || noInfo)
            },
            released: vg.released,
            ratings: vg.ratings.map(rating => ({
               title: rating.title,
               percent: rating.percent
            })),
            platforms: vg.platforms.map(platform => ({
               id: platform.platform.id,
               name: platform.platform.name
            })),
            genres: vg.genres.map(genre => genre.name)
         });
      });

      URL = next;
   }
   return apiData;
};

const infoApiGenres = async () => {
   const apiData = await infoApiVg();
   const allGenres = new Set();
   apiData.forEach(data => data.genres.forEach(genre => allGenres.add(genre)));
   return [...allGenres];
};

const infoApiPlatforms = async () => {
   const apiData = await infoApiVg();
   const allPlatforms = [];
   const platformsMap = new Map();

   apiData.forEach(item => {
      item.platforms.forEach(platform => {
         if (!platformsMap.has(platform.id)) {
            platformsMap.set(platform.id, platform);
            allPlatforms.push({ id: platform.id, name: platform.name });
         }
      });
   });

   return allPlatforms;
};

module.exports = {
   infoApiVg,
   infoApiGenres,
   infoApiPlatforms
};