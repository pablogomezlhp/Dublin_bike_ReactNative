import axios from 'axios';

const url =
  'https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=fe13d5b491f98e4e0bb8b7f564826e81d3f7e4df';

const results = [];

const api = axios.get(url).then((response) => {
  const data = response.data;
  results.push(data);
});

export default results;
