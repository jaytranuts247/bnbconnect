import React from "react";
import { StyledButton, Wrapper } from "../../styles/Bases";
import { Container } from "./Profile.styles";

const Profile = ({ username, intro }) => {
  return (
    <Wrapper>
      <Container>
        <div className="profile-header">
          <h1>Hi, My name is {username}</h1>
          <p className="profile-header__intro">{intro}</p>
          <StyledButton>Message me</StyledButton>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Profile;
