import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "../../styles/Bases";
import ImageSlider from "../ImageSlider.component";
import {
  DotSeperator,
  ListingContainer,
  ShortSeperator,
} from "./StayItem.styles";
import PropTypes from "prop-types";

import StarIcon from "@material-ui/icons/Star";

import { calcDayDiff, getPriceNum, getTotalPrice } from "../../utils/utils";

const StayItem = ({ listing, idx }) => {
  const {
    images,
    title,
    type,
    previewInfo,
    amenities,
    ratings,
    reviewNumber,
    pricePerNight,
    checkIn,
    checkOut,
    _id,
  } = listing;

  return (
    <Wrapper className="bnb-listing-item">
      <div className="link">
        <Link to={`/listings/${_id}`}></Link>
      </div>
      <ListingContainer>
        <div className="left-side">
          <div className="slider-container">
            <ImageSlider images={images} />
          </div>
        </div>
        <div className="right-side">
          <div className="listing-title">
            <div className="listing-title__type">
              <span>{type}</span>
            </div>
            <div className="listing-title__title">
              <span>{title}</span>
            </div>
            <ShortSeperator width={40} />
          </div>
          <div className="listing-preview">
            <div className="listing-preview__info">
              {previewInfo &&
                previewInfo.length !== 0 &&
                previewInfo.map((item, idx) => {
                  return (
                    <Fragment key={idx}>
                      {idx !== 0 && <DotSeperator margin={5} fontSize={16} />}
                      <span className="listing-preview__info--details">
                        {item}
                      </span>
                    </Fragment>
                  );
                })}
            </div>
            <div className="listing-preview__amenities">
              {amenities &&
                amenities.length !== 0 &&
                amenities.map((amenity, idx) => (
                  <Fragment key={idx}>
                    {idx !== 0 && <DotSeperator margin={5} fontSize={16} />}
                    <span className="listing-preview__amenities--details">
                      {amenity}
                    </span>
                  </Fragment>
                ))}
            </div>
          </div>
          <div className="price-review-info">
            <div className="price-review-info-container">
              <div className="review-info">
                <div className="review-info__details">
                  <span>
                    <StarIcon style={{ color: "#ff385c", fontSize: "20" }} />
                  </span>
                  <span id="rating">{ratings} </span>
                  <span id="review-number">
                    ({reviewNumber}{" "}
                    {parseInt(reviewNumber, 10) > 1 ? "reviews" : "review"})
                  </span>
                </div>
              </div>
              <div className="price-details">
                <div className="price-details__price-per-night">
                  <span id="price">{pricePerNight}</span>
                  <span id="night"> / night </span>
                </div>
                <div className="price-details__price-total">
                  <span>
                    $
                    {getTotalPrice(
                      getPriceNum(pricePerNight),
                      calcDayDiff(checkIn, checkOut)
                    )}
                  </span>
                  <span> total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ListingContainer>
    </Wrapper>
  );
};

export default StayItem; // add with Spinner later

StayItem.defaultProps = {
  listing: {
    images: [],
    title: "",
    type: "",
    previewInfo: [],
    amenities: [],
    ratings: "",
    reviewNumber: "",
    pricePerNight: "",
    checkIn: "",
    checkOut: "",
  },
  idx: 0,
};

StayItem.propTypes = {
  listing: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};
