import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { Container, StyledFilterButton } from "./SearchListing.styles";
import StayItem from "../StayItem/StayItem.component";
import { useHistory } from "react-router";
import { clearListingErrors } from "../../redux/listing/listing.actions";

const SearchListings = ({
  listings,
  checkIn,
  checkOut,
  errors,
  clearListingErrors,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (errors) history.push("/home");
    clearListingErrors();
  }, [errors]);

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
  errors: listing.errors,
});

const mapDispatchToProps = (dispatch) => {
  return {
    clearListingErrors: () => dispatch(clearListingErrors()),
  };
};

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
