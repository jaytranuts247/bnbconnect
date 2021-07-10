import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import GoogleMapReact, { fitBounds } from "google-map-react";
import { LatLngLocations } from "../../config";
import ListingLocationMarker from "../ListingLocationMarker/ListingLocationMarker.component";
import {
  filterOnMapChange,
  listingsOnMapChange,
} from "../../redux/listing/listing.actions";

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
  listingsOnMapChange,
}) => {
  const [mapCenter, setMapCenter] = useState(center);
  const [mapZoom, setMapZoom] = useState(zoom);
  const _onClick = ({ x, y, lat, lng, event }) =>
    console.log(x, y, lat, lng, event);

  const _onDragEnd = (map) => {
    const bounds = {
      ne: map.getBounds().getNorthEast().toJSON(),
      sw: map.getBounds().getSouthWest().toJSON(),
    };
    if (listings) listingsOnMapChange(bounds);
  };

  useEffect(() => {
    if (!listings) return;
    console.log("useffect map");

    const bounds = new window.google.maps.LatLngBounds();

    listings.forEach((listing) => {
      const { lat, lng } = listing.coords;
      bounds.extend(new window.google.maps.LatLng(lat, lng));
    });

    const newBounds = {
      ne: {
        lat: bounds.toJSON().north,
        lng: bounds.toJSON().east,
      },
      sw: {
        lat: bounds.toJSON().south,
        lng: bounds.toJSON().west,
      },
    };
    const size = {
      width: 640, // Map width in pixels
      height: 380, // Map height in pixels
    };

    const { center, zoom } = fitBounds(newBounds, size);

    setMapCenter(center);
    setMapZoom(zoom);
  }, []);

  const createMapOptions = (maps) => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [
        // {
        //   featureType: "road.arterial",
        //   elementType: "geometry",
        //   stylers: [{ color: "#c5c5c5" }],
        // },
        {
          featureType: "transit.station",
          elementType: "labels",
          stylers: [{ color: "#b0b0b0" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#dddddd" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#c5c5c5" }],
        },
        {
          featureType: "poi",
          elementType: "labels.icon",
          stylers: [{ color: "#b0b0b0" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#b0b0b0" }],
        },
        {
          stylers: [
            { saturation: -10 },
            { gamma: 0.8 },
            { lightness: 4 },
            { visibility: "on" },
          ],
        },
      ],
    };
  };

  return (
    <>
      {mapCenter && mapZoom && (
        <MapContainer>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            }}
            defaultCenter={center}
            defaultZoom={zoom}
            center={mapCenter}
            zoom={mapZoom}
            onClick={_onClick}
            // onChange={_onBoundsChange}
            onDragEnd={_onDragEnd}
            // onGoogleApiLoaded={_onGoogleApiLoaded}
            options={createMapOptions}
          >
            {listings &&
              listings.map((listing) => (
                <ListingLocationMarker
                  key={listing._id}
                  lat={listing.coords.lat}
                  lng={listing.coords.lng}
                  text={listing.pricePerNight}
                />
              ))}
            {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
          </GoogleMapReact>
        </MapContainer>
      )}
    </>
  );
};

MapSearch.defaultProps = {
  center: LatLngLocations.newyork,
  zoom: 5,
};

const mapStateToProps = ({ listing }) => ({
  listings: listing.listings,
  filtered_listings: listing.filtered_listings,
});

const mapDispatchToProps = (dispatch) => {
  return {
    filterOnMapChange: (bounds, listings) =>
      dispatch(filterOnMapChange(bounds, listings)),
    listingsOnMapChange: (bounds) => dispatch(listingsOnMapChange(bounds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapSearch);
