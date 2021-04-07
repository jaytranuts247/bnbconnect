export const decrementWithLimit = (num, limit) => {
	if (num === limit) return num;
	return num - 1;
};

export const incrementWithLimit = (num, limit) => {
	if (num >= limit) return num;
	return num + 1;
};
