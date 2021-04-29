export const filterListingInBound = (bounds, coords) => {
  let result = true;

  for (const [key, latLngBound] of Object.entries(bounds)) {
    if (key === "ne") {
      if (latLngBound.lat < coords.lat || latLngBound.lng < coords.lng) {
        // console.log(
        //   "listing is out of map compared to NE",
        //   latLngBound,
        //   coords
        // );
        result = false;
      }
    }
    if (key === "sw") {
      if (latLngBound.lat > coords.lat || latLngBound.lng > coords.lng) {
        // console.log(
        //   "listing is out of map compared to SW",
        //   latLngBound,
        //   coords
        // );
        result = false;
      }
    }
  }

  return result;
};
