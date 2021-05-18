import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { LatLngLocations } from "../../config";

import HomeMarker from "../HomeMarker/HomeMarker.component";

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 500px;
  height: 450px;
`;

const MapListing = ({ center, zoom, listing }) => {
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
    <div>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          // onClick={_onClick}
          // onChange={_onBoundsChange}
          // onDragEnd={_onDragEnd}
          // onGoogleApiLoaded={_onGoogleApiLoaded}
          options={createMapOptions}
          center={center}
        >
          {listing && (
            <HomeMarker
              key={listing._id}
              lat={listing.coords.lat}
              lng={listing.coords.lng}
              text={listing.pricePerNight}
            />
          )}
        </GoogleMapReact>
      </MapContainer>
    </div>
  );
};

MapListing.defaultProps = {
  center: {
    lat: LatLngLocations.LasVegasStrip.lat,
    lng: LatLngLocations.LasVegasStrip.lng,
  },
  zoom: 16,
};

const mapStateToProps = ({ listing }) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MapListing);
