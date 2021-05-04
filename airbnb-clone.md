# Backend Routes
=====
# HTML 
* GET / StaticPageController#root

# API EndPoints
## Users  
* POST/api/users - Sign Up

## Authentication 
* POST/api/auth - Login
* DELETE/api/auth - Log Out

## Listing
* GET/api/listings - get all listings on place search
* GET/api/listings/:id - get details of specific listing

## Booking 
* GET/api/bookings/:id - get all bookings of current user or listing
*[//]: #(create review for specific listings, filtered by user id or listing id )

* POST/api/listings/:id/bookings - create new booking for specific listings
* PATCH/api/bookings - Edit bookings Info
* DELETE/api/bookings - Delete all bookings
* DELETE/api/bookings/:id - delete specific bookings

## Review 
* GET/api/reviews/:id - get all reviews for current user
* POST/api/listings/:id/reviews - create new review for specific listings 
*[//]: # (create review for specific listings )
* PATCH/api/reviews/:id - update review
* DELETE/api/reviews/:id - delete specific reviews