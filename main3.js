const axios = require("axios");

const cheerio = require("cheerio");
const fs = require("fs");

const { extractContent } = require("./utils/utils");

const printA = () => console.log("PrintA");

const latlngList = [
	{ lat: 36.12381, lng: -115.17607 },
	{ lat: 36.10693, lng: -115.16709 },
	{ lat: 36.11428, lng: -115.18905 },
	{ lat: 36.11326, lng: -115.18835 },
	{ lat: 36.06016, lng: -115.1708 },
	{ lat: 36.11276, lng: -115.18713 },
	{ lat: 36.10733, lng: -115.16679 },
	{ lat: 36.10628, lng: -115.16758 },
	{ lat: 36.10594, lng: -115.16253 },
	{ lat: 36.114706, lng: -115.1728484 },
	{ lat: 36.11306, lng: -115.18781 },
	{ lat: 36.12384, lng: -115.17585 },
	{ lat: 36.11259, lng: -115.18809 },
	{ lat: 36.10629, lng: -115.16566 },
	{ lat: 36.1071, lng: -115.16561 },
	{ lat: 36.11342, lng: -115.14436 },
	{ lat: 36.11371, lng: -115.189 },
	{ lat: 36.12725, lng: -115.18933 },
	{ lat: 36.11357, lng: -115.18882 },
	{ lat: 36.1225, lng: -115.1852 },
	{ lat: 36.11366, lng: -115.18859 },
	{ lat: 36.10707, lng: -115.1656 },
	{ lat: 36.10779, lng: -115.16712 },
	{ lat: 36.11354, lng: -115.18919 },
	{ lat: 36.10955, lng: -115.17615 },
	{ lat: 36.14323, lng: -115.15105 },
	{ lat: 36.11325, lng: -115.18862 },
	{ lat: 36.12886, lng: -115.14378 },
	{ lat: 36.09772, lng: -115.18813 },
	{ lat: 36.11435, lng: -115.1878 },
	{ lat: 33.75125, lng: -116.71221 },
	{ lat: 36.53867, lng: 31.99733 },
	{ lat: 44.53822, lng: 14.89795 },
	{ lat: 31.3245, lng: -113.57467 },
	{ lat: 33.66543, lng: -78.91344 },
	{ lat: 42.45849, lng: 14.20714 },
	{ lat: 44.10644, lng: 15.23487 },
	{ lat: 44.05528, lng: 12.57501 },
	{ lat: 34.04584, lng: -117.46826 },
	{ lat: 31.30983, lng: -113.54797 },
	{ lat: 36.06342, lng: 120.30006 },
	{ lat: 36.78402, lng: -2.10836 },
	{ lat: 36.57836, lng: 32.00869 },
	{ lat: 35.94123, lng: 10.55189 },
	{ lat: 32.10874, lng: -116.88396 },
];

function getPath(object, value) {
	return Object.keys(object).reduce((r, k) => {
		var kk = Array.isArray(object) ? `[${k}]` : `${k}`;
		if (object[k] === value) {
			r.push(kk);
		}
		if (object[k] && typeof object[k] === "object") {
			r.push(
				...getPath(object[k], value).map(
					(p) => kk + (p[0] === "[" ? "" : ".") + p
				)
			);
		}
		return r;
	}, []);
}

var object = {
	name: "Ford",
	age: 30,
	cars: {
		garage1: [{ Car1: "Ford", Car2: "Seat" }],
		garage2: [{ car2: "BMW", car3: "Fiat" }],
	},
};
const listingPath = {
	// listing.lat
	listings:
		"niobeMinimalClientData[1][1].data.dora.exploreV3.sections[0].items",
	listings_someting_1:
		"niobeMinimalClientData[1][1].data.dora.exploreV3.searchFooter.sections[0].items",
	listings_someting_1:
		"niobeMinimalClientData[1][1].data.dora.exploreV3.sections[1].items",
};

// console.log(getPath(object, 'Ford'));
const url =
	"https://www.airbnb.com/rooms/49097383?adults=3&check_in=2021-09-06&check_out=2021-09-16&previous_page_section_name=1000&federated_search_id=830df209-9b51-456c-ba16-333b5e54e6c1";

const checkExist = (data) => {
	if (
		!data ||
		!data.niobeMinimalClientData ||
		!data.niobeMinimalClientData[1] ||
		!data.niobeMinimalClientData[1][1]
	) {
		console.log("data is not exist");
	}
	return;
};

const main = async () => {
	const html = fs.readFileSync("./test.html");

	const $ = cheerio.load(html);

	const text = $("body").html();
	// fs.writeFileSync("./text.txt", text);

	let latLngMatchs = /(\"[a-z]+\":.?[1-9]+.[1-9]+)w+/g;
	let latLngMatchs2 = /(^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6})/g;
	let latLngMatchs3 = /((\"(lat|lng)\")(.?\:)?(\+?|\-?)?(\d+)?(\.\d+))/g;
	let latLngMatches4 = /((\"lat\"\:\d+\.\d+)\,(\"lng\"\:(\+?|\-?)?)\d+\.\d+)/g;
	// const matches = text.match(latLngMatchs);

	// console.log("matches", matches);

	// console.log(text.match(/(\"[a-z]+\":.?[1-9]+.[1-9]+)w+/g));
	// console.log(latLngMatchs3.exec(text));

	// const latLngLists = text.match(latLngMatches4);
	// console.log(latLngLists.length);
	console.log(text.match(latLngMatches4));

	const dataRes = $("#data-state").html();
	// console.log(dataRes);
	const data = JSON.parse(dataRes);
	// console.log(data);
	// console.log(getPath(data, 36.114706));
	if (
		!data ||
		!data.niobeMinimalClientData ||
		!data.niobeMinimalClientData[1] ||
		!data.niobeMinimalClientData[1][1]
	) {
		console.log("data is not exist");
		return;
	}

	if (
		data &&
		data.niobeMinimalClientData[1] &&
		data.niobeMinimalClientData[1][1]
	) {
		const listingData =
			data.niobeMinimalClientData[1][1].data.dora.exploreV3.sections[0].items;
	}

	if (
		data &&
		data.niobeApolloClientData.__niobe_denormalized &&
		data.niobeApolloClientData.__niobe_denormalized.queries[0][1]
	) {
		const listingDataApollo =
			data.niobeApolloClientData.__niobe_denormalized.queries[0][1].dora
				.exploreV3.sections[0].items;
	}

	listingData.map((item) => {
		console.log(item.listing.lat);
		console.log(getPath(data, item.listing.lat));
	});

	console.log(getPath(data, "Service fee"));

	const searchFooterMatch = /((?:\"searchFooter\"\:)\{(.+)\})/g;
	const searchSection = /()/;

	// const loadData = fs.readFileSync("./datares.txt", "utf8");
	// const searchFooter = loadData.match(searchFooterMatch);
	// console.log(searchFooter);
};

main();
// ("niobeApolloClientData.__niobe_denormalized.queries[0][1].dora.exploreV3.sections[0].items[9].pricingQuote.structuredStayDisplayPrice.explanationData.priceDetails[0].items[3].description");