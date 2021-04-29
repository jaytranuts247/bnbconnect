import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { LatLngLocations } from "../../config";
import ListingLocation from "../ListingLocation/ListingLocation.component";
import { filterOnMapChange } from "../../redux/listing/listing.actions";

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const MapSearch = ({
  center,
  zoom,
  listings,
  filtered_listings,
  filterOnMapChange,
}) => {
  const _onBoundsChange = ({ bounds }) => {
    // console.log({ center, zoom, bounds, marginBounds }, center);
    // console.log("update listings", bounds);
    filterOnMapChange(bounds, listings);
  };

  const _onClick = ({ x, y, lat, lng, event }) =>
    console.log(x, y, lat, lng, event);

  const _onDragEnd = (map) => {
    console.log(map);

    return;
  };

  return (
    <div>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          onClick={_onClick}
          onChange={_onBoundsChange}
          onDragEnd={_onDragEnd}
        >
          {filtered_listings && filtered_listings.length !== 0
            ? filtered_listings.map((listing) => (
                <ListingLocation
                  key={listing._id}
                  lat={listing.coords.lat}
                  lng={listing.coords.lng}
                  text={listing.pricePerNight}
                />
              ))
            : listings &&
              listings.map((listing) => (
                <ListingLocation
                  key={listing._id}
                  lat={listing.coords.lat}
                  lng={listing.coords.lng}
                  text={listing.pricePerNight}
                />
              ))}
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
      </MapContainer>
    </div>
  );
};

MapSearch.defaultProps = {
  center: {
    lat: LatLngLocations.LasVegasStrip.lat,
    lng: LatLngLocations.LasVegasStrip.lng,
  },
  zoom: 13,
};

const mapStateToProps = ({ listing }) => ({
  listings: listing.listings,
  filtered_listings: listing.filtered_listings,
});

const mapDispatchToProps = (dispatch) => {
  return {
    filterOnMapChange: (bounds, listings) =>
      dispatch(filterOnMapChange(bounds, listings)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapSearch);

// map feature

/*
 * search on map
 * - filter new listings onMapDrag ---> OK
 * - debounce search - limit search ----> OK
 * - check for duplicate before write to DB
 * - make dummmy reviews
 * - scrappe with pagination -> 100 listings ???
 */
