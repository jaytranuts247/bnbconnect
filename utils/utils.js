const fs = require("fs");

const ScrapperSelectorMaps = {
	listingItemType: "._b14dlit",
	listingItemTitle: ".",
};

const getLastWord = (s) => {
	var n = s.split(" ");
	return n[n.length - 1];
};

const isFileExisted = (filePath) => {
	try {
		return fs.existsSync(filePath);
	} catch (err) {
		console.error(err);
	}
};

const getStayType = (s) => {
	const n = s.split(" ");
	return n[1];
};

const getStayName = (s) => {
	const n = s.split(" ");
	let stayName = [];
	let isTaken = false;
	n.map((item) => {
		if (item === "in") {
			isTaken = true;
			return;
		}
		if (!isTaken) return;
		stayName.push(item);
	});

	return stayName.reduce((acc, currentItem) => acc + " " + currentItem, "");
};

module.exports = {
	getLastWord,
	isFileExisted,
	getStayType,
	getStayName,
};
