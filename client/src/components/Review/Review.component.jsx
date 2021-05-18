import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { StyledButton, Wrapper } from "../../styles/Bases";
import { Container, StyledCloseIcon } from "./Review.styles";
import Rating from "react-rating";
import StarIcon from "@material-ui/icons/Star";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import _ from "lodash";

import {
  createReview,
  loadReview,
  loadReviews,
  handleChange,
  updateReview,
  clearCurrentReview,
} from "../../redux/review/review.actions";

const ratingServices = [
  "accuracy",
  "location",
  "communication",
  "checkin",
  "cleanliness",
  "value",
];
// var ratingStars = Array.from({ length: 5 }, (_, index) => index + 1);

const Review = ({
  toggleReview,
  setToggleReview,
  loadReviews,
  loadReview,
  listing_id,
  user,
  reviews,
  isReviewed,
  currentReview,
  handleChange,
  updateReview,
  createReview,
  clearCurrentReview,
  errors,
}) => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (toggleReview) setToggleReview(false);
  });

  const handleClickRating = (value, key) => {
    handleChange(key, value);
  };

  const handleClose = () => {
    if (toggleReview) setToggleReview(false);
    clearCurrentReview();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggleReview(false);
    if (isReviewed) {
      updateReview(currentReview);
    } else {
      createReview(currentReview);
    }
    clearCurrentReview();
  };

  useEffect(() => {
    if (!reviews) loadReviews(listing_id); // needed ??
    if (!currentReview && user._id) loadReview(listing_id, user);
  }, []);

  return (
    <Wrapper>
      <Container>
        {currentReview && (
          <form className="review-card" ref={ref} onSubmit={handleSubmit}>
            <StyledCloseIcon onClick={handleClose} />
            <h1>Write review</h1>
            <div className="review-ratings">
              {currentReview &&
                ratingServices.map((key, idx) => {
                  return (
                    <div key={idx} className="rating-info">
                      <div className="rating-type">
                        <span>{_.capitalize(key)}</span>
                      </div>
                      <div className="rating-star">
                        <Rating
                          emptySymbol={
                            <StarIcon
                              style={{
                                fontSize: "18",
                                background: "transparent",
                                color: "#eaeaea",
                              }}
                            />
                          }
                          fullSymbol={
                            <StarIcon
                              style={{ fontSize: "18", color: "#ff385c" }}
                            />
                          }
                          initialRating={currentReview[key]}
                          fractions={2}
                          onClick={(value) => handleClickRating(value, key)}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="review-content">
              <textarea
                name="reviewContent"
                id="user-review-content"
                cols="50"
                rows="16"
                wrap="true"
                placeholder="Please leave your review here..."
                maxLength={150}
                value={currentReview.reviewContent}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              ></textarea>
            </div>
            <div className="submit-button">
              {isReviewed ? (
                <StyledButton
                  backgroundColor={"#ff385c"}
                  borderColor={"none"}
                  paddingV={12}
                  paddingH={18}
                  type="submit"
                >
                  Update
                </StyledButton>
              ) : (
                <StyledButton
                  backgroundColor={"#ff385c"}
                  borderColor={"none"}
                  paddingV={12}
                  paddingH={18}
                  type="submit"
                >
                  Submit
                </StyledButton>
              )}
            </div>
          </form>
        )}
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = ({ review }) => ({
  reviews: review.reviews,
  currentReview: review.currentReview,
  isReviewed: review.isReviewed,
  errors: review.errors,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadReviews: (listing_id) => dispatch(loadReviews(listing_id)),
    loadReview: (listing_id, user_id) =>
      dispatch(loadReview(listing_id, user_id)),
    handleChange: (key, value) => dispatch(handleChange(key, value)),

    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review)),
    clearCurrentReview: () => dispatch(clearCurrentReview()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
