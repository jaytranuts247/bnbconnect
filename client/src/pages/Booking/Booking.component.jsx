import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import { loadUserBooking } from "../../redux/user_booking/user_booking.actions";
import { useParams } from "react-router-dom";

import { StyledButton, Wrapper } from "../../styles/Bases";
import { Container } from "./Booking.styles";
import ImageSlider from "../../components/ImageSlider.component";
import { unitDisplay } from "../../utils/utils";
import Review from "../../components/Review/Review.component";
import {
  loadReviews,
  loadAllReviews,
  updateReview,
  clearCurrentReview,
} from "../../redux/review/review.actions";

const Booking = ({
  bookings,
  reviews,
  user_booking_errors,
  booking_listings,
  loadUserBooking,
  updateReview,
  loadAllReviews,
  user,
}) => {
  const [toggleReview, setToggleReview] = useState(false);
  const [listingId, setListingId] = useState(null);

  useEffect(() => {
    if (!bookings && user._id) {
      loadUserBooking(user._id);
    }
  }, []);

  useEffect(() => {
    if (booking_listings) loadAllReviews(booking_listings);
  }, [booking_listings, loadAllReviews]);

  const handleClickReview = (listing_id) => {
    setListingId(listing_id);
    setToggleReview((prev) => !prev);
    clearCurrentReview();
  };

  return (
    <Wrapper>
      {toggleReview && (
        <Review
          user={user}
          listing_id={listingId}
          toggleReview={toggleReview}
          setToggleReview={setToggleReview}
        />
      )}
      <Container>
        <div className="booking-title">
          <h1 className="upcoming-plan">Upcoming Plans</h1>
          <p>You have upcoming trips. Manage and view your bookings here</p>
        </div>
        <div className="user-bookings">
          {bookings &&
            reviews &&
            booking_listings &&
            bookings.map((booking) => {
              const listing = booking_listings.filter(
                (listing) => listing._id === booking.listing_id
              )[0];

              const isReviewed =
                reviews && listing
                  ? reviews.filter(
                      (review) =>
                        review.listing_id === listing._id &&
                        review.author_id === user._id
                    ).length !== 0
                  : false;
              return (
                <>
                  {listing && (
                    <div className="booking-info">
                      <div className="booking-info__header">
                        <div className="date-range">
                          {moment(booking.checkIn).format("MMM DD YYYY")} -{" "}
                          {moment(booking.checkOut).format("MMM DD YYYY")}
                        </div>
                        <div className="write-review">
                          {isReviewed ? (
                            <StyledButton
                              fontColor={"#717171"}
                              borderColor={"#717171"}
                              paddingV={10}
                              paddingH={10}
                              marginV={0}
                              onClick={() => handleClickReview(listing._id)}
                            >
                              Edit Review
                            </StyledButton>
                          ) : (
                            <StyledButton
                              fontColor={"#717171"}
                              borderColor={"#717171"}
                              paddingV={10}
                              paddingH={10}
                              marginV={0}
                              onClick={() => handleClickReview(listing._id)}
                            >
                              Write Review
                            </StyledButton>
                          )}
                        </div>
                      </div>
                      <div className="booking-info__content">
                        <Link to={`/listings/${listing._id}`} />
                        <div className="left-side">
                          <div className="slider">
                            <div className="slider-container">
                              <ImageSlider images={listing.images} />
                            </div>
                          </div>
                        </div>
                        <div className="right-side">
                          <div className="listing-info">
                            <div className="listing-info__title">
                              <p id="listing-name">{listing.title}</p>
                              <p id="listing-address">
                                {listing.publicAddress}
                              </p>
                            </div>
                            <div className="listing-info__fee">
                              <div className="listing-info__fee--price">
                                <span id="price">{listing.pricePerNight} </span>
                                <span>
                                  {" "}
                                  /{" "}
                                  {unitDisplay(listing.pricePerNight, "night")}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
        </div>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = ({ user_booking, review, user }) => ({
  bookings: user_booking.bookings,
  booking_listings: user_booking.booking_listings,
  user_booking_errors: user_booking.errors,
  reviews: review.reviews,
  user: user.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserBooking: (user_id) => dispatch(loadUserBooking(user_id)),
    loadAllReviews: (listing_id) => dispatch(loadAllReviews(listing_id)),
    updateReview: (review) => dispatch(updateReview(review)),
    clearCurrentReview: () => dispatch(clearCurrentReview()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
