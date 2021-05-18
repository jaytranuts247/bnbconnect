import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import moment from "moment";

import { LineSeperator, StyledButton, Wrapper } from "../../styles/Bases";
import {
  Container,
  TitleSection,
  ImagePreviewSection,
  StyledMedal,
  MainSection,
  MainContent,
  SideForm,
  AmenitySection,
  CalendarBookingSection,
  ReviewSection,
  LocationSection,
  DatePickerContainer,
  GuestPick,
} from "./Listing.styles";

import StarIcon from "@material-ui/icons/Star";
import LinearProgress from "@material-ui/core/LinearProgress";

import HostImage from "../HostImage.component";
import { amenitiesMap } from "../../utils/amenities_utils";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css fil
import { setBookingDates } from "../../redux/booking/booking.actions";

import {
  calcDayDiff,
  unitDisplay,
  guestDisplay,
  getPriceNum,
} from "../../utils/utils";
import _ from "lodash";
import MapListing from "../Maps/MapListing.component";
import GuestCount from "../GuestCount.component";
import { createUserBooking } from "../../redux/user_booking/user_booking.actions";
import { loadCurrentListing } from "../../redux/listing/listing.actions";
import { loadReviews } from "../../redux/review/review.actions";
import { foundReview, getAvgRatings } from "../../utils/review_utils";

const amenities = [
  "wifi",
  "tv",
  "kitchen",
  "heat",
  "hottub",
  "parking",
  "gym",
  "pool",
];
const reviewDetails = [
  {
    type: "cleanliness",
    rating: 4.9,
  },
  {
    type: "communication",
    rating: 5,
  },
  {
    type: "Check-in",
    rating: 4.8,
  },
  {
    type: "accuracy",
    rating: 4.6,
  },
  {
    type: "location",
    rating: 5,
  },
  {
    type: "value",
    rating: 4.7,
  },
];

const reviewList = [
  {
    author_name: "Brittany",
    reviewContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente, nostrum quaerat eaque incidunt, numquam explicabo praesentium ipsam repellendus dolorum magnam similique!Doloribus in ad officia praesentium. ",
    updatedAt: new Date(),
  },
  {
    author_name: "Brittany",
    reviewContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente, nostrum quaerat eaque incidunt, numquam explicabo praesentium ipsam repellendus dolorum magnam similique!Doloribus in ad officia praesentium. ",
    updatedAt: new Date(),
  },
  {
    author_name: "Brittany",
    reviewContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente, nostrum quaerat eaque incidunt, numquam explicabo praesentium ipsam repellendus dolorum magnam similique!Doloribus in ad officia praesentium. ",
    updatedAt: new Date(),
  },
  {
    author_name: "Brittany",
    reviewContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente, nostrum quaerat eaque incidunt, numquam explicabo praesentium ipsam repellendus dolorum magnam similique!Doloribus in ad officia praesentium. ",
    updatedAt: new Date(),
  },
  {
    author_name: "Brittany",
    reviewContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente, nostrum quaerat eaque incidunt, numquam explicabo praesentium ipsam repellendus dolorum magnam similique!Doloribus in ad officia praesentium. ",
    updatedAt: new Date(),
  },
  {
    author_name: "Brittany",
    reviewContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente, nostrum quaerat eaque incidunt, numquam explicabo praesentium ipsam repellendus dolorum magnam similique!Doloribus in ad officia praesentium. ",
    updatedAt: new Date(),
  },
  {
    author_name: "Brittany",
    reviewContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente, nostrum quaerat eaque incidunt, numquam explicabo praesentium ipsam repellendus dolorum magnam similique!Doloribus in ad officia praesentium. ",
    updatedAt: new Date(),
  },
];

const Listing = ({
  currentListing,
  startDate,
  endDate,
  adultsNum,
  childrenNum,
  setBookingDates,
  createUserBooking,
  reviews,
  loadReviews,
  loadCurrentListing,
  isAuthenticated,
  user,
  setLoginSignUp,
}) => {
  const [toggleDatePick, setToggleDatePick] = useState(false);
  const [toggleGuest, setToggleGuest] = useState(false);

  let { listing_id } = useParams();
  let history = useHistory();

  const selectionRange = {
    startDate: startDate === null ? new Date() : moment(startDate).toDate(),
    endDate:
      endDate === null ? addDays(new Date(), 3) : moment(endDate).toDate(),
    key: "selection",
  };
  // console.log(
  //   "selectionRange",
  //   startDate,
  //   endDate,
  //   typeof startDate,
  //   typeof moment(startDate),
  //   typeof moment(startDate).toDate()
  // );

  const handleDatePick = (ranges) => {
    if (ranges) {
      setBookingDates({
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
      });
    }
  };

  const _onToggleDatePick = () => {
    setToggleDatePick((prev) => !prev);
    setToggleGuest(false);
  };
  const _onToggleGuestPick = () => {
    setToggleGuest((prev) => !prev);
    setToggleDatePick(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setLoginSignUp(true);
      return;
    }

    const booking = {
      listing_id: listing_id,
      guest_id: user._id,
      checkIn: startDate,
      checkOut: endDate,
    };

    console.log("booking", booking);
    createUserBooking(booking).then(() => {
      // console.log("redirect to booking", user_id);
      history.push("/bookings");
    });
  };

  useEffect(() => {
    loadCurrentListing(listing_id);
  }, [listing_id, loadCurrentListing]);

  useEffect(() => {
    if (!reviews) {
      loadReviews(listing_id);
    } else {
      const reviewFound = foundReview(reviews, "listing_id", listing_id);
      if (!reviewFound) loadReviews(listing_id);
    }
  }, [listing_id]);

  return (
    <Wrapper>
      {currentListing && (
        <Container>
          <TitleSection>
            <div className="listing-title">
              <span>{currentListing.title}</span>
            </div>
            <div className="listing-details">
              <div className="listing-details__review">
                <span>
                  <StarIcon style={{ color: "#ff385c", fontSize: "20" }} />
                </span>
                <span id="ratings">{currentListing.ratings}</span>
                <span id="review-number">
                  ({currentListing.reviewNumber}{" "}
                  {unitDisplay(currentListing.reviewNumber, "review")})
                </span>
              </div>
              <div className="listing-details__super-host">
                <StyledMedal size="18" />
                <span id="superHost">Superhost</span>
              </div>
              <div className="listing-details__location">
                <span>
                  {currentListing.locationInfo &&
                  currentListing.locationInfo.description
                    ? currentListing.locationInfo.description
                    : ""}
                </span>
              </div>
            </div>
          </TitleSection>
          <ImagePreviewSection>
            <div className="image-preview-container">
              <div className="column primary-column">
                <img
                  src={currentListing.images[0].picture}
                  alt="listing-preview"
                />
              </div>
              <div className=" column secondary-column">
                <div className="sub-column">
                  <img
                    src={currentListing.images[1].picture}
                    alt="listing-preview"
                  />
                </div>
                <div className="sub-column">
                  <img
                    src={currentListing.images[2].picture}
                    alt="listing-preview"
                  />
                </div>
              </div>
              <div className=" column secondary-column">
                <div className="sub-column">
                  <img
                    src={currentListing.images[3].picture}
                    alt="listing-preview"
                  />
                </div>
                <div className="sub-column">
                  <img
                    src={currentListing.images[4].picture}
                    alt="listing-preview"
                  />
                </div>
              </div>
            </div>
          </ImagePreviewSection>
          <MainSection>
            <MainContent>
              <div className="listing-type">
                <div className="listing-kicker-content">
                  <div className="kicker-content">
                    <span>{currentListing.type}</span>
                  </div>
                  <div className="preview-info">
                    {currentListing.previewInfo.map((item, idx) => (
                      <Fragment key={idx}>
                        {idx !== 0 && <span> &#183; </span>}
                        <span>{item}</span>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <HostImage imageUrl={null} />
              </div>
              <LineSeperator borderColor="#ebebeb" />
              <div className="listing-description">
                {currentListing.description && (
                  <p>{currentListing.description} </p>
                )}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente, nostrum quaerat eaque incidunt, numquam explicabo
                  praesentium ipsam repellendus dolorum magnam similique!
                  Doloribus in ad officia praesentium. Quos adipisci minima
                  quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nulla autem nisi culpa, reprehenderit iure alias
                  aspernatur. Excepturi enim placeat nesciunt, hic voluptatum,
                  similique dolor facilis, velit quasi officia vel distinctio!
                </p>
              </div>
              <LineSeperator borderColor="#ebebeb" />
              <AmenitySection>
                <div className="listing-amenities">
                  <div className="listing-amenities__title">
                    <h2>Amenities</h2>
                  </div>
                  <div className="listing-amenities__list">
                    {amenities.map((item, idx) => {
                      const { name, icon } = amenitiesMap(item, "lg");
                      return (
                        <div
                          className="listing-amenities__list--item"
                          key={idx}
                        >
                          <div className="icon">{icon}</div>
                          <span>{name}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="listing-amenities__button">
                    <StyledButton textDecorationOnHover={"underline"}>
                      Show all 24 amenities
                    </StyledButton>
                  </div>
                </div>
              </AmenitySection>
              <LineSeperator borderColor="#ebebeb" />
              <CalendarBookingSection>
                <div className="listing-calendar">
                  <div className="date-booking">
                    <div className="date-booking__title">
                      <h2>
                        {calcDayDiff(moment(startDate), moment(endDate))} nights
                        in {currentListing.location}
                      </h2>
                    </div>
                    <div className="date-booking__date-range">
                      {moment(startDate).format("MMMM DD, YYYY")} -{" "}
                      {moment(endDate).format("MMMM DD, YYYY")}
                    </div>
                  </div>
                  <div className="date-range-picker">
                    <DateRange
                      ranges={[selectionRange]}
                      onChange={handleDatePick}
                      months={2}
                      rangeColors={["#ff385ceb"]}
                      color="#ff385ceb"
                      direction="horizontal"
                      showMonthAndYearPickers={false}
                      showSelectionPreview={true}
                      showPreview={false}
                      showDateDisplay={false}
                    />
                  </div>
                </div>
              </CalendarBookingSection>
            </MainContent>
            <SideForm>
              <div className="form-container">
                <div className="listing-info">
                  <div className="listing-info__price">
                    <span id="price">{currentListing.pricePerNight}</span>
                    <span> / night</span>
                  </div>
                  <div className="listing-info__review">
                    <span>
                      <StarIcon style={{ color: "#ff385c", fontSize: "20" }} />
                    </span>
                    <span id="ratings">{currentListing.ratings}</span>
                    <span id="review-number">
                      ({currentListing.reviewNumber}{" "}
                      {unitDisplay(currentListing.reviewNumber, "review")})
                    </span>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="booking-form-container">
                    <div
                      className="booking-form__date"
                      onClick={_onToggleDatePick}
                    >
                      <div className="booking-form__date--checkIn">
                        <label htmlFor="startDate">CHECK-IN</label>
                        <span>{moment(startDate).format("MM/DD/YYYY")}</span>
                      </div>
                      <div className="booking-form__date--checkOut">
                        <label htmlFor="startDate">CHECKOUT</label>
                        <span>{moment(endDate).format("MM/DD/YYYY")}</span>
                      </div>
                    </div>
                    <div
                      className="booking-form__guest"
                      onClick={_onToggleGuestPick}
                    >
                      <label htmlFor="guest">GUESTS</label>
                      <span>{guestDisplay(adultsNum, childrenNum)}</span>
                    </div>
                  </div>
                  <StyledButton
                    backgroundColor={
                      "radial-gradient(circle at calc((100 - 95.8166) * 1%) calc((100 - 54.1667) * 1%), #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 67%, #BD1E59 90%, #BD1E59 100% ) !important"
                    }
                    width={"100%"}
                    fontColor={"#fff"}
                    paddingV={15}
                    borderRadius={8}
                    borderColor={"none"}
                    // onClick={handleClickBooking}
                    type="submit"
                  >
                    Reserve
                  </StyledButton>
                </form>
                <div className="no-charging">
                  <span>You won't be charged yet</span>
                </div>
                <div className="listing-services-info">
                  <div className="listing-fee">
                    <div className="listing-fee__details">
                      {currentListing.pricePerNight} x{" "}
                      {calcDayDiff(moment(startDate), moment(endDate)) || 0}{" "}
                      {unitDisplay(
                        calcDayDiff(moment(startDate), moment(endDate)),
                        "night"
                      )}
                    </div>
                    <div className="listing-fee__price">
                      $
                      {getPriceNum(currentListing.pricePerNight) *
                        (calcDayDiff(moment(startDate), moment(endDate)) || 0)}
                    </div>
                  </div>
                  <div className="service-fee">
                    <div className="service-fee__details">
                      {currentListing.cleaningFee
                        ? currentListing.cleaningFee.description
                        : "Cleaning fee"}
                    </div>
                    <div className="service-fee__price">
                      {currentListing.cleaningFee
                        ? currentListing.cleaningFee.priceString
                        : "$0"}
                    </div>
                  </div>
                  <div className="service-fee">
                    <div className="service-fee__details">
                      {currentListing.serviceFee
                        ? currentListing.serviceFee.description
                        : "Service fee"}
                    </div>
                    <div className="service-fee__price">
                      {currentListing.serviceFee
                        ? currentListing.serviceFee.priceString
                        : "$0"}
                    </div>
                  </div>
                  <LineSeperator borderColor="#ebebeb" />
                  <div className="service-fee total-price">
                    <div className="service-fee__details">Total</div>
                    <div className="service-fee__price">
                      $
                      {getPriceNum(currentListing.pricePerNight) *
                        calcDayDiff(moment(startDate), moment(endDate)) +
                        (currentListing.cleaningFee
                          ? getPriceNum(currentListing.cleaningFee.priceString)
                          : 0) +
                        (currentListing.serviceFee
                          ? getPriceNum(currentListing.serviceFee.priceString)
                          : 0) || 0}
                    </div>
                  </div>
                </div>
                {toggleDatePick && (
                  <DatePickerContainer>
                    <DateRange
                      ranges={[selectionRange]}
                      onChange={handleDatePick}
                      months={2}
                      rangeColors={["#ff385ceb"]}
                      color="#f1f1f1"
                      direction="horizontal"
                      showMonthAndYearPickers={false}
                      showSelectionPreview={true}
                      showPreview={false}
                      showDateDisplay={false}
                    />
                    <div className="close">
                      <StyledButton
                        paddingV={10}
                        backgroundColor={"#ff385ceb"}
                        backgroundColorHover={"#ff385ceb"}
                        fontColor={"#fff"}
                        borderColor={"none"}
                        onClick={_onToggleDatePick}
                      >
                        Close
                      </StyledButton>
                    </div>
                  </DatePickerContainer>
                )}

                {toggleGuest && (
                  <GuestPick>
                    <div className="guest-pick-container">
                      <GuestCount
                        top={"0px"}
                        right={"0px"}
                        isBoxShadow={false}
                      />
                      <div className="guest-dummy"></div>

                      <div className="close">
                        <StyledButton
                          paddingV={10}
                          backgroundColor={"#ff385ceb"}
                          backgroundColorHover={"#ff385ceb"}
                          fontColor={"#fff"}
                          borderColor={"none"}
                          onClick={_onToggleGuestPick}
                        >
                          Close
                        </StyledButton>
                      </div>
                    </div>
                  </GuestPick>
                )}
              </div>
            </SideForm>
          </MainSection>
          <LineSeperator borderColor="#ebebeb" />
          <ReviewSection>
            <div className="review-container">
              <div className="review-title">
                <span>
                  <StarIcon style={{ color: "#ff385c", fontSize: "20" }} />
                </span>
                <span id="ratings">{currentListing.ratings}</span>
                <span id="review-number">
                  ({currentListing.reviewNumber}{" "}
                  {unitDisplay(currentListing.reviewNumber, "review")})
                </span>
              </div>
              <div className="review-details">
                {reviews &&
                  Object.entries(getAvgRatings(reviews, listing_id)).map(
                    ([type, rating]) => {
                      return (
                        <div key={type} className="review-item">
                          <div className="review-item__type">
                            {_.upperFirst(type)}
                          </div>
                          <div className="review-item__rating">
                            <div className="progress-bar">
                              <LinearProgress
                                variant="determinate"
                                value={(rating / 5) * 100}
                              />
                            </div>
                            <div className="rating">{rating}</div>
                          </div>
                        </div>
                      );
                    }
                  )}
              </div>
              <div className="review-list">
                {reviews &&
                  reviews
                    .filter((review) => review.listing_id === listing_id)
                    .map((reviewItem) => (
                      <div className="review-list-container">
                        <div className="review-list-info">
                          <HostImage imageUrl={null} />
                          <div className="review-list-info__author">
                            <div className="review-list-info__author--name">
                              {reviewItem.author_name || "UserName"}
                            </div>
                            <div className="review-list-info__author--date">
                              {moment(reviewItem.updatedAt).format(
                                "MMMM DD, YYYY"
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="review-list-content">
                          <p>{reviewItem.reviewContent}</p>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </ReviewSection>
          <LineSeperator borderColor="#ebebeb" />
          <LocationSection>
            <div className="section-header">
              <h2>Location</h2>
            </div>

            <div className="listing-location">
              <span>{currentListing.locationInfo.description}</span>
            </div>
            <div className="listing-location-map">
              <MapListing
                center={{ ...currentListing.coords }}
                listing={currentListing}
                zoom={14}
              />
            </div>
          </LocationSection>
          <LineSeperator borderColor="#ebebeb" />
        </Container>
      )}
    </Wrapper>
  );
};
const mapStateToProps = ({ listing, booking, user, review }) => ({
  listings: listing.listings,
  startDate: booking.startDate,
  endDate: booking.endDate,
  adultsNum: booking.adultsNum,
  childrenNum: booking.childrenNum,
  isAuthenticated: user.isAuthenticated,
  user: user.user,
  currentListing: listing.currentListing,
  reviews: review.reviews,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setBookingDates: (dateRange) => dispatch(setBookingDates(dateRange)),
    createUserBooking: (booking) => dispatch(createUserBooking(booking)),
    loadCurrentListing: (listing_id) =>
      dispatch(loadCurrentListing(listing_id)),
    loadReviews: (listing_id) => dispatch(loadReviews(listing_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
