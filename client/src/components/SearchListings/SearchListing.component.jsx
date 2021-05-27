import React, { Fragment } from "react";
import { connect } from "react-redux";

import { Container, StyledFilterButton } from "./SearchListing.styles";
import StayItem from "../StayItem/StayItem.component";
import { locationDisplayTerms } from "../../utils/utils";

const SearchListings = ({ listings, filtered_listings, pickedLocation }) => {
  return (
    <Container>
      <div className="listing-location">
        <div className="listing-location__name">
          {pickedLocation && (
            <h1>Stays in {locationDisplayTerms(pickedLocation)}</h1>
          )}
        </div>
        <div className="listing-location__filters">
          <StyledFilterButton>Cancellation flexibility</StyledFilterButton>
          <StyledFilterButton>Type of place</StyledFilterButton>
          <StyledFilterButton>Price</StyledFilterButton>
          <StyledFilterButton>More filters</StyledFilterButton>
        </div>
      </div>
      {/* <HSeperator /> */}
      <div className="bnb-listing">
        {filtered_listings && filtered_listings.length !== 0
          ? filtered_listings.map((listing, idx) => (
              <Fragment key={idx}>
                {listing && <StayItem listing={listing} idx={idx} />}
              </Fragment>
            ))
          : listings &&
            listings.map((listing, idx) => (
              <Fragment key={idx}>
                {listing && <StayItem listing={listing} idx={idx} />}
              </Fragment>
            ))}
      </div>
    </Container>
  );
};

const mapStateToProps = ({ listing, booking }) => ({
  listings: listing.listings,
  filtered_listings: listing.filtered_listings,
  pickedLocation: booking.selectedLocation,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchListings);
