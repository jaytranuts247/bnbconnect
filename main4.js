const { JSONPath } = require("jsonpath-plus");
const fs = require("fs");
const cheerio = require("cheerio");
const { getPath } = require("./utils/utils");

const json1 = {
	store: {
		book: [
			{
				category: "reference",
				author: "Nigel Rees",
				title: "Sayings of the Century",
				price: 8.95,
			},
			{
				category: "fiction",
				author: "Evelyn Waugh",
				title: "Sword of Honour",
				price: 12.99,
			},
			{
				category: "fiction",
				author: "Herman Melville",
				title: "Moby Dick",
				isbn: "0-553-21311-3",
				price: 8.99,
			},
			{
				category: "fiction",
				author: "J. R. R. Tolkien",
				title: "The Lord of the Rings",
				isbn: "0-395-19395-8",
				price: 22.99,
			},
		],
		bicycle: {
			color: "red",
			price: 19.95,
		},
	},
};

const getPriceQuote = (json, idx, priceTag) => {
	let priceQuotes;
	if (
		json &&
		json.niobeMinimalClientData[1] &&
		json.niobeMinimalClientData[1][1]
	) {
		priceQuotes =
			json.niobeMinimalClientData[1][1].data.dora.exploreV3.sections[0].items[
				idx
			].pricingQuote.structuredStayDisplayPrice.explanationData.priceDetails[0]
				.items;
	}
	if (
		json &&
		json.niobeApolloClientData &&
		json.niobeApolloClientData.__niobe_denormalized &&
		json.niobeApolloClientData.__niobe_denormalized.queries[0][1]
	) {
		priceQuotes =
			json.niobeApolloClientData.__niobe_denormalized.queries[0][1].dora
				.exploreV3.sections[0].items[idx].pricingQuote
				.structuredStayDisplayPrice.explanationData.priceDetails[0].items;
	}
	// console.log("priceQuotes", priceQuotes);

	return priceQuotes.filter((item) => item.description === priceTag);
};

// niobeMinimalClientData[1][1].data.dora.exploreV3.sections[0].items[19]
// 	.pricingQuote.structuredStayDisplayPrice.explanationData.priceDetails[0]
// 	.items[3].description;
const html = fs.readFileSync("./test.html", "utf8");
const $ = cheerio.load(html);
const dataText = $("#data-state").html();
const json = JSON.parse(dataText);

// const result = JSONPath({ path: "$.store.book[*].title", json });
// console.log(result);

// console.log(getPath(json, -115.17585));
console.log(getPath(json, "Service fee"));

// const serviceFees = JSONPath({
// 	path:
// 		"$.niobeMinimalClientData[1][1].data.dora.exploreV3.sections[0].items[19].pricingQuote.structuredStayDisplayPrice.explanationData.priceDetails[0].items[*]",
// 	json,
// });

// console.log(serviceFees);

// for (let idx = 0; idx < 19; idx++) {
// 	console.log(
// 		JSONPath({
// 			path: `$.niobeMinimalClientData[1][1].data.dora.exploreV3.sections[0].items[${idx}].pricingQuote.structuredStayDisplayPrice.explanationData.priceDetails[0].items[3].priceString`,
// 			json,
// 		})
// 	);
// }

if (
	json &&
	json.niobeMinimalClientData[1] &&
	json.niobeMinimalClientData[1][1]
) {
	const listingData =
		json.niobeMinimalClientData[1][1].data.dora.exploreV3.sections[0].items;
	// console.log(listingData);
}

if (
	json &&
	json.niobeApolloClientData.__niobe_denormalized &&
	json.niobeApolloClientData.__niobe_denormalized.queries[0][1]
) {
	const listingDataApollo =
		json.niobeApolloClientData.__niobe_denormalized.queries[0][1].dora.exploreV3
			.sections[0].items;
	// console.log(listingDataApollo);
}

for (let idx = 0; idx < 19; idx++) {
	const pricequote = getPriceQuote(json, idx, "Service fee")[0];
	const results = {
		description: pricequote.description,
		priceString: pricequote.priceString,
	};
	// console.log(results);
}
