import React from "react";
import styled from "styled-components";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

const HostImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
HostImageContainer.defaultProps = {
  size: 32,
};

const StyledAccount = styled(AccountCircleRoundedIcon)``;

const HostImage = ({ imageUrl, size, iconColor }) => {
  return (
    <HostImageContainer size={size}>
      {imageUrl ? (
        <img src={imageUrl} alt="host" />
      ) : (
        <StyledAccount style={{ fontSize: size, color: iconColor }} />
      )}
    </HostImageContainer>
  );
};

HostImage.defaultProps = {
  imageUrl: null,
  size: 60,
  iconColor: "#ccc",
};

export default HostImage;
