// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = "https://api.igdb.com/v4/games/";
const CLIENT_ID = process.env.REACT_APP_IGDB_CLIENT_ID;
const ACCESS_TOKEN = process.env.REACT_APP_IGDB_ACCESS_TOKEN;

const IMAGE_BASE_URL = 'https://images.igdb.com/igdb/image/upload/t_720p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  API_URL,
  CLIENT_ID,
  ACCESS_TOKEN,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
