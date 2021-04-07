import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { LatLngLocations } from "../../config";

const MapContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
`;

const MapSearch = ({ center, zoom }) => {
	return (
		<div>
			<MapContainer>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
					defaultCenter={center}
					defaultZoom={zoom}
				>
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
	zoom: 11,
};

export default MapSearch;
