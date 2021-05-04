import React from "react";
import { connect } from "react-redux";

import { Container, StyledFilterButton } from "./SearchListing.styles";
import StayItem from "../StayItem/StayItem.component";

const SearchListings = ({ listings, filtered_listings }) => {
  return (
    <Container>
      <div className="listing-location">
        <div className="listing-location__name">
          <h1>Stays in Las Vegas</h1>
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
              <>
                {listing && <StayItem key={idx} listing={listing} idx={idx} />}
              </>
            ))
          : listings.map((listing, idx) => (
              <>
                {listing && <StayItem key={idx} listing={listing} idx={idx} />}
              </>
            ))}
      </div>
    </Container>
  );
};

const mapStateToProps = ({ listing }) => ({
  listings: listing.listings,
  filtered_listings: listing.filtered_listings,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchListings);
