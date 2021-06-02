import React, { Fragment } from "react";
import { connect } from "react-redux";

import { Container, StyledFilterButton } from "./SearchListing.styles";
import StayItem from "../StayItem/StayItem.component";

const SearchListings = ({ listings, filtered_listings, checkIn, checkOut }) => {
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
        {listings &&
          listings.map((listing, idx) => (
            <Fragment key={idx}>
              {listing && (
                <StayItem
                  listing={listing}
                  idx={idx}
                  checkIn={checkIn}
                  checkOut={checkOut}
                />
              )}
            </Fragment>
          ))}
      </div>
    </Container>
  );
};

const mapStateToProps = ({ listing, booking }) => ({
  listings: listing.listings,
  filtered_listings: listing.filtered_listings,
  checkIn: booking.startDate,
  checkOut: booking.endDate,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchListings);

// {filtered_listings && filtered_listings.length !== 0
//   ? filtered_listings.map((listing, idx) => (
//       <Fragment key={idx}>
//         {listing && <StayItem listing={listing} idx={idx} />}
//       </Fragment>
//     ))
//   : listings &&
//     listings.map((listing, idx) => (
//       <Fragment key={idx}>
//         {listing && <StayItem listing={listing} idx={idx} />}
//       </Fragment>
//     ))}
