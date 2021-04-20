const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const axios = require("axios");
const mime = require("mime-types");
const scrapSteam = require("./scrapSteam");

const url =
	"https://www.airbnb.com/rooms/49097383?adults=3&check_in=2021-09-06&check_out=2021-09-16&previous_page_section_name=1000&federated_search_id=830df209-9b51-456c-ba16-333b5e54e6c1";

const getImages = async (url) => {
	let images = [];
	const { data } = axios.get(url);

	const $ = cheerio.load(data.html());
	$("img").each((i, e) => {
		images.push($(e).attr("src"));
	});
	return images;
};

// const axios = require("axios").default;

const fethHtml = async (url) => {
	try {
		const { data } = await axios.get(url);
		return data;
	} catch {
		console.error(
			`ERROR: An error occurred while trying to fetch the URL: ${url}`
		);
	}
};

const main = () => {
	let images = [];
	// const html = await fethHtml(url);
	const SELECTOR = "._skzmvy ._5ltqju ._13sj9hk ._1fog6rx a img";

	axios(url)
		.then((res) => {
			const $ = cheerio.load(res.data);
			const urls = $(SELECTOR).each((i, ele) => {
				return $(this).attr("src");
			});
			console.log("urls\n", urls);
		})
		.catch((e) => console.log(e));

	// const SELECTOR = "._skzmvy ._5ltqju ._13sj9hk ._1fog6rx";
};

// const BASE_URL = "https://www.airbnb.com";
// const URL = `${BASE_URL}/s/Miami--FL--United-States/homes`;
// const CSS_QUERY = "._fhph4u ._8ssblpx";

// const main = async () => {
// 	const request = await axios.get(URL);
// 	const { data } = request;
// 	const $ = cheerio.load(data);
// 	const elements = $(CSS_QUERY);
// 	for (let i = 0; i < elements.length; i++) {
// 		const el = $('meta[itemprop="name"]', elements[i]);
// 		// logger.info(el.attr("content"));
// 		console.log(el.attr("content"));
// 	}
// };

main();
