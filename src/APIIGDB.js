import {
  API_URL,
} from './configIGDB';

var myHeaders = new Headers();
myHeaders.append("Client-ID", "x0muvk9gdif8w2reu3bkf5y0k1xrsu");
myHeaders.append("Authorization", "Bearer s7qvf5pffac1nsuy9tioqc4ef5u224");
myHeaders.append("Content-Type", "text/plain");

var raw = "fields name, cover.image_id; sort rating desc";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const apiSettings = {
  fetchGames: async(searchTerm) => {
    const raw = searchTerm
    ? `search ${searchTerm}; fields name, cover.image_id;`
    : `fields name, summary, cover.image_id, artworks.image_id, screenshots.image_id; sort rating desc; where first_release_date > 1609434000 & rating > 75 & rating_count > 7; limit 25;`
    requestOptions.body = raw
    return await (await fetch(API_URL, requestOptions)).json();
  },

  fetchFirstGame: async(gameId) => {
    const raw = `fields name, summary, cover.image_id, artworks.image_id, screenshots.image_id; where id = ${gameId};`
    requestOptions.body = raw
    return await (await fetch(API_URL, requestOptions)).json();

  }
};

export default apiSettings;
