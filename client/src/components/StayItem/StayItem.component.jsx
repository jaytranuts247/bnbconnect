import React from "react";

const StayItem = ({ listing, idx }) => {
  return (
    <div>
      <div className="bnb-listing__item">
        {listing && <h1>{listing.title}</h1>}
      </div>
    </div>
  );
};

export default StayItem;
