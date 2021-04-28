import React, { Fragment } from "react";

import { Wrapper } from "../../styles/Bases";
import ImageSlider from "../ImageSlider.component";
import {
  DotSeperator,
  ListingContainer,
  ShortSeperator,
} from "./StayItem.styles";
import PropTypes from "prop-types";
import { Seperator } from "../Header/Header.styles";
import StarIcon from "@material-ui/icons/Star";

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
  } = listing;
  return (
    <Wrapper>
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
                <span>
                  <StarIcon style={{ color: "#ff385c", fontSize: "20" }} />
                </span>
                <span id="rating">{ratings} </span>
                <span id="review-number">
                  ({reviewNumber}{" "}
                  {parseInt(reviewNumber, 10) > 1 ? "reviews" : "review"})
                </span>
              </div>
              <div className="price-details">
                <div className="price-details__price-per-night">
                  <span id="price">{pricePerNight}</span>
                  <span id="night"> / night</span>
                </div>
                <div className="price-details__price-total">
                  <span></span>
                  <span>total</span>
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
  },
  idx: 0,
};

StayItem.propTypes = {
  listing: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};
