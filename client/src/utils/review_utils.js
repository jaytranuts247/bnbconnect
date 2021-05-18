export const convertArrayToObject = (array, key) => {
  const initialValue = {};

  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

export const foundReview = (arr, key, value) => {
  const found = arr.some((obj) => obj[key] === value);
  return found;
};

export const getAvgRatings = (reviews, listing_id) => {
  const initialRating = {
    accuracy: 1,
    communication: 5,
    cleanliness: 5,
    location: 5,
    checkin: 5,
    value: 5,
  };

  const avgRating = reviews
    .filter((review) => review.listing_id === listing_id)
    .reduce((acc, review) => {
      for (let [key, value] of Object.entries(acc)) {
        acc[key] = (value + review[key]) / 2;
      }
      return acc;
    }, initialRating);

  return avgRating;
};
