const cheerio = require("cheerio");
const fs = require("fs");
function main() {
	const html = fs.readFileSync("./test.html", "utf8");
	const $ = cheerio.load(html);
	const dataText = $("#data-state").html();
	const json = JSON.parse(dataText);

	const html_listing = fs.readFileSync(
		"./scrappedFiles/listings_18.html",
		"utf8"
	);
	const $$ = cheerio.load(html_listing);
	const rating = $$(
		"[data-plugin-in-point-id=REVIEWS_DEFAULT] > div > div > section > h2 > span._goo6eo > div > span"
	).text();

	console.log(rating);
}
main();
