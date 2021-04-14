const express = require("express");
const router = express.Router();
const axios = require("axios");
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const ListingScrapper = require("../modules/ListingScrapper");

// https://www.airbnb.com/s/Las-Vegas--NV--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&checkin=2021-09-14&checkout=2021-09-22&adults=5&source=structured_search_input_header&search_type=autocomplete_click&place_id=ChIJ0X31pIK3voARo3mz1ebVzDo
// https://www.airbnb.com/s/Las-Vegas--NV--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&checkin=2021-09-14&checkout=2021-09-22&adults=5&source=structured_search_input_header&search_type=autocomplete_click&place_id=ChIJ0X31pIK3voARo3mz1ebVzDo
// https://www.airbnb.com/s/Las-Vegas--NV--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&checkin=2021-09-05&checkout=2021-09-11&adults=5&source=structured_search_input_header&search_type=autocomplete_click&query=Las%20Vegas%2C%20NV%2C%20United%20States&place_id=ChIJ0X31pIK3voARo3mz1ebVzDo

const url =
	"https://www.airbnb.com/s/Las-Vegas-Strip--Las-Vegas--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Las%20Vegas%20Strip%2C%20Las%20Vegas%2C%20United%20States&place_id=ChIJ69QoNDjEyIARTIMmDF0Z4kM&checkin=2021-09-05&checkout=2021-09-11&adults=5&source=structured_search_input_header&search_type=autocomplete_click";

const autocompletedInput = {
	description: "Las Vegas, NV, USA",
	matched_substrings: [
		{
			length: 9,
			offset: 0,
		},
	],
	place_id: "ChIJ0X31pIK3voARo3mz1ebVzDo",
	reference: "ChIJ0X31pIK3voARo3mz1ebVzDo",
	structured_formatting: {
		main_text: "Las Vegas",
		main_text_matched_substrings: [
			{
				length: 9,
				offset: 0,
			},
		],
		secondary_text: "NV, USA",
	},
	terms: [
		{
			offset: 0,
			value: "Las Vegas",
		},
		{
			offset: 11,
			value: "NV",
		},
		{
			offset: 15,
			value: "USA",
		},
	],
	types: ["locality", "political", "geocode"],
};
//www.airbnb.com/s/Saigon--Ho-Chi-Minh--Vietnam/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&checkin=2021-09-14&checkout=2021-09-22&adults=5&source=structured_search_input_header&search_type=autocomplete_click&query=Saigon%2C%20Ho%20Chi%20Minh%2C%20Vietnam&place_id=ChIJ0T2NLikpdTERKxE8d61aX_E

router.post("/", async (req, res) => {
	try {
		// const res = await axios.get(url);
		// console.log(res);
		// console.log(req.body);
		const Scrapper = new ListingScrapper("", req.body);

		// make the url
		// Scrapper.urlMake(req.body);
		// console.log(Scrapper.getUrl());

		const result = await Scrapper.ScrapeHtml();
		// const scrappedListings = await Scrapper.getImages();

		console.log(result);
		res.send(result); // scrappedListings
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
