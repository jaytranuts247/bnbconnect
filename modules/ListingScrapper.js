const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const axios = require("axios");
const mime = require("mime-types");
const fs = require("fs");
const path = require("path");
const { getLastWord, isFileExisted, getStayName } = require("../utils/utils");

class ListingScrapper {
	requestInput = {};
	url = "";
	scrappedListings = [];
	// browser;

	#Selectors = {
		item: "._8s3ctt",
		type: "._b14dlit",
		title: "._5kaapu span",
		previewInfo: {
			current: "div._kqh46o",
			info: "span._3hmsj",
			amenities: "div._kqh46o",
		},
		pricePerNight: "span._olc9rf0",
		ratings: "span._10fy1f8",
		reviewNumber: "span._a7a5sx",
		// images: "._9ofhsl",
		images: "img",
		individualListingLink: "a._mm360j",
		forwardButton: "._1u6aumhe button",
		prevButton: "_1qfwqy2d button",
	};

	#urlConfig = {
		tab_id: "home_tab",
		date_picker_type: "calendar",
		baseUrl: "https://www.airbnb.com/s/homes?",
		source: "structured_search_input_header",
		search_type: "pagination",
	};

	constructor(url, requestInput) {
		(this.requestInput = requestInput),
			(this.url = url),
			(this.scrappedListings = this.scrappedListings);
	}

	getUrl() {
		return this.url;
	}

	getSelectors() {
		return this.#Selectors;
	}

	urlMake = () => {
		// return url = `${baseUrl}tab_id=${urlConfig.tab_id}&`
		const { pagination, bookingInput, locationInfo } = this.requestInput;
		this.url =
			this.#urlConfig.baseUrl +
			`tab_id=${this.#urlConfig.tab_id}` +
			`&date_picker_type=${this.#urlConfig.date_picker_type}` +
			`&search_type=${this.#urlConfig.search_type}` +
			`&source=${this.#urlConfig.source}` +
			`&query=${locationInfo.structured_formatting.main_text.replace(
				" ",
				"%20"
			)}%2C%20United%20States` +
			`&checkin=${bookingInput.checkIn}` +
			`&checkout=${bookingInput.checkOut}` +
			`&adults=${bookingInput.adults}` +
			`&children=${bookingInput.children}` +
			`&place_id=${locationInfo.place_id}` +
			`&section_offset=${pagination}` +
			`&items_offset=${(pagination - 1) * 20}`;
		return this.url;
	};

	static saveImagesToDisk = async () => {
		return;
	};
	static saveTextToDisk = () => {
		return;
	};

	fetchHtml = async () => {
		let browser;
		try {
			browser = await puppeteer.launch({ headless: false });
			const page = await browser.newPage();
			page.setViewport({ width: 1280, height: 800 });
			// waitForSelector ??
			await page.goto(this.url);
			const content = await page.content();
			// await browser.close();
			return content;
		} catch (err) {
			if (browser) await browser.close();
			throw new Error(err);
		}
	};

	ScrapeHtml = async () => {
		let browser;
		let results = [];
		try {
			// make the url
			this.urlMake();
			// if (false) {
			if (isFileExisted("./test1.html")) {
				console.log("isFileExisted");
				const filePath = path.join(__dirname, "../test.html");
				var html = fs.readFileSync(filePath, "utf8");
				console.log("file type", mime.lookup(html));
			} else {
				// fetch html from url
				// var html = await this.fetchHtml();
				console.log("start scrapping");
				browser = await puppeteer.launch({ headless: false });
				var page = await browser.newPage();
				page.setViewport({ width: 1280, height: 800 });
				await page.goto(this.url, { waitUntil: "networkidle2" });
				// const html = await page.content();
				var html = await page.evaluate(() => document.body.innerHTML);

				// save html file to disk
				fs.writeFileSync("./test.html", html);
			}
			// load html with cheerio
			const $ = cheerio.load(html);
			console.log("loaded cheerio");
			// Start scrapping
			const listings = $(this.#Selectors.item);
			console.log("listings", listings);

			listings.each(async (e, listing) => {
				let scrappedListingInfo = {};
				const $$ = cheerio.load(listing);

				// scrape the listing title
				scrappedListingInfo.title = $$(this.#Selectors.title).text();
				scrappedListingInfo.type = $$(this.#Selectors.type).text();
				scrappedListingInfo.location = getStayName(
					$$(this.#Selectors.type).text()
				);
				scrappedListingInfo.pricePerNight = $$(
					this.#Selectors.pricePerNight
				).text();

				scrappedListingInfo.ratings = $$(this.#Selectors.ratings).text();
				scrappedListingInfo.reviewNumber = $$(
					this.#Selectors.reviewNumber
				).text();

				scrappedListingInfo.previewInfo = [];
				scrappedListingInfo.amenities = [];

				// scrape previewInfo
				$$(this.#Selectors.previewInfo.current)
					.first()
					.children(this.#Selectors.previewInfo.info)
					.each((i, e) => {
						scrappedListingInfo.previewInfo.push($$(e).text());
					});

				// scrape amenities
				$$(this.#Selectors.previewInfo.current)
					.next()
					.children(this.#Selectors.previewInfo.info)
					.each((i, e) => {
						scrappedListingInfo.amenities.push($$(e).text());
					});

				// scrape images
				scrappedListingInfo.images = [];
				console.log("scrape Images");

				// $$(this.#Selectors.images).each((i, e) => {
				// 	console.log("element", $$(e).attr("src"));
				// 	scrappedListingInfo.images.push($$(e).attr("src"));
				// });

				scrappedListingInfo.individualListingLink =
					"https://www.airbnb.com" +
					$$(this.#Selectors.individualListingLink).attr("href");

				this.scrappedListings.push(scrappedListingInfo);
			});

			// console.log("scrappedListings\n", this.scrappedListings);
			// await this.getImages();
			// console.log("scrappedListings\n", this.scrappedListings);

			const tmp = await this.scrapeListingDetails(page);

			if (tmp) return this.scrappedListings;
		} catch (err) {
			throw new Error(err);
		}
	};

	scrapeListingDetails = async (page) => {
		try {
			this.scrappedListings.map(async (item) => {
				// await page.goto(item.individualListingLink);

				// await page.waitForNavigation({
				// 	timeout: 60000,
				// 	waitUntil: "networkidle2",
				// });

				// const html = await page.content();

				// const $$ = cheerio.load(html);

				// $$(this.#Selectors.images).each((i, e) => {
				// 	console.log($$(e).attr("src"));
				// 	item.images.push($$(e).attr("src"));
				// });

				return item;
			});

			return this.scrappedListings;
		} catch (err) {
			console.error(err);
		}
	};
}
// content="www.airbnb.com/rooms/49020824?adults=3&check_in=2021-09-06&check_out=2021-09-16&previous_page_section_name=1000"
module.exports = ListingScrapper;

/*
const response  = [
	{
		listingTitle:
		listingType:
		location:
		description: []
		amenities: [

		]
		previewInfo: [],
		amenities: []
		pricePerNight: 
		ratings:
		reviewNumber:
		reviews: [
			{
				user: 
				review: 
				rating: 
			}
		]
		images: [

		],
		mapLocation: {
			lat:
			lng:
		},
		individualMapZoom: 

	},
	{

	}
];

*/

/* --------------------------------------- */

/*
 {
    "pagination": 1,
	"bookingInput": {
		"adults": 3,
		"children": 0,
		"infants": 0,
		"checkIn": "2021-09-06",
		"checkOut": "2021-09-16"
	},
	"locationInfo": {
		"description": "Las Vegas, NV, USA",
		"matched_substrings": [
			{
				"length": 9,
				"offset": 0
			},
		],
		"place_id": "ChIJ69QoNDjEyIARTIMmDF0Z4kM",
		"reference": "ChIJ69QoNDjEyIARTIMmDF0Z4kM",
		"structured_formatting": {
			"main_text": "Las Vegas Strip",
			"main_text_matched_substrings": [
				{
					"length": 9,
					"offset": 0
				},
			],
			"secondary_text": "NV, USA"
		},
		"terms": [
			{
				"offset": 0,
				"value": "Las Vegas Strip"
			},
			{
				"offset": 11,
				"value": "NV"
			},
			{
				"offset": 15,
				"value": "USA"
			},
		],
		"types": ["locality", "political", "geocode"]
	},
}
*/
