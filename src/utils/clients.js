import axios from "axios";

export const fetcher = (url) => axios.get(url).then(({ data }) => data);

export const getSpotifyClient = (token) => (url) =>
  axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(({ data }) => data);
