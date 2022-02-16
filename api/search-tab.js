import axios from "axios";
import cheerio from "cheerio";

export default async function handler(req, res) {
  const response = await axios(
    `https://www.ultimate-guitar.com/search.php?search_type=title&value=${req.query.value}`
  );
  const $ = cheerio.load(response.data);
  const content = JSON.parse($(".js-store").attr("data-content"));

  return res.status(200).json(content?.store?.page?.data).end();
}
