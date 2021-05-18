import React, { useState } from "react";
import { Wrapper } from "../../styles/Bases";
import { Marker } from "./HomeMarker.styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

const HomeMarker = ({ lat, lng, text }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    return;
  };
  return (
    <Wrapper>
      <Marker
        height={"50px"}
        width={"50px"}
        backgroundColor={"#222222"}
        borderRadius={"50%"}
        paddingH={"20px"}
        paddingV={"20px"}
        clicked={clicked}
        onClick={handleClick}
      >
        <HomeRoundedIcon style={{ fontSize: 24 }} />
      </Marker>
    </Wrapper>
  );
};

export default HomeMarker;
