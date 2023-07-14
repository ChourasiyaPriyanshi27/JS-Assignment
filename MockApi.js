const axios = require("axios");

async function getFirstAlbumTitle() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
  return response.data[1].title;
}

module.exports = getFirstAlbumTitle;