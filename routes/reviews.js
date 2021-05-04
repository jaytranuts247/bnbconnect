const express = require("express");
const moment = require("moment");

const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const joiValidator = require("../middlewares/joiValidator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const Schemas = require("../middlewares/Schemas");
const Review = require("../model/Review");

const jwtSecret = config.get("jwtSecret");

// @router   GET reviews
// @desc     get all reviews of current listing
// @access   Public
router.get("/:listingId", async (req, res) => {
  const listingId = req.params.listingId;

  try {
    const reviews = await Review.find({ listing_id: listingId });
    res.json(reviews);
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
});

// @router   POST reviews
// @desc    create new review for listing
// @access   Public
router.post("/", authMiddleware, async (req, res) => {
  const { listing_id, author_id } = req.body;
  try {
    //check for review is already existed
    const reviewExisted = Review.find({
      listingId: listing_id,
      author_id: author_id,
    });

    if (reviewExisted.length > 0)
      return res.json({
        msg: "User have already made review for this listing",
      });

    // create review object
    const newReview = new Review({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // save review
    const savedReview = await newReview.save();

    res.json(savedReview);
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
});

// @router   PATCH reviews
// @desc     update review
// @access   Public
router.patch("/:reviewId", authMiddleware, async (req, res) => {
  const reviewId = req.params.reviewId;
  try {
    const updatedReview = await Review.find(
      { _id: reviewId },
      { $set: { ...req.body, updatedAt: new Date() } },
      { new: true }
    );
    console.log("review is updated", updatedReview);
    res.json(updatedReview);
  } catch (err) {
    console.log(err.message);
    res.json({ msg: err.message });
  }
});

// @router   DELETE reviews
// @desc     delete review
// @access   Public
router.delete("/:reviewId", authMiddleware, async (req, res) => {
  const reviewId = req.params.reviewId;
  try {
    const deletedReview = Review.findOneAndDelete({ _id: reviewId });
    console.log("Review is deleted", deletedReview);
    res.json(deletedReview);
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
});

module.exports = router;
