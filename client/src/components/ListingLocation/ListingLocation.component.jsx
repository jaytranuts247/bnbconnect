import React, { useState } from "react";
import { Wrapper } from "../../styles/Bases";
import { Marker, StyledTagIcon } from "./ListingLocation.styles";

const ListingLocation = ({ lat, lng, text }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (event) => {
    // console.log("handleClick ListingLocation", event);  // return an event
    setClicked((prev) => !prev);
  };

  return (
    <Wrapper>
      <Marker
        height={20}
        borderRadius={30}
        clicked={clicked}
        onClick={handleClick}
      >
        {text} <StyledTagIcon />
      </Marker>
    </Wrapper>
  );
};

export default ListingLocation;
