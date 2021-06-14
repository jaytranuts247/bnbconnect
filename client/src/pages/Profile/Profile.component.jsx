import React, { useEffect, useState } from "react";
import { LineSeperator, StyledButton, Wrapper } from "../../styles/Bases";
import { Container } from "./Profile.styles";
import { connect } from "react-redux";

import {
  createProfile,
  loadProfile,
  handleChange,
  updateProfile,
  clearProfileErrors,
} from "../../redux/profile/profile.actions";
import { useHistory } from "react-router";

const OnEdit = ({
  intro,
  profile,
  handleClickEdit,
  handleChange,
  handleSubmit,
}) => {
  useEffect(() => {
    if (profile) handleChange(profile.intro);
  }, []);

  return (
    <form className="intro-container" onSubmit={handleSubmit}>
      <label htmlFor="intro">Profile Intro</label>
      <textarea
        type="text"
        name="intro"
        value={intro}
        rows="10"
        cols="20"
        onChange={(e) => {
          e.preventDefault();
          console.log(e.target.value);
          handleChange(e.target.value);
        }}
        placeholder="please add intro..."
      />
      <div className="edit-btn">
        <StyledButton
          paddingH={15}
          paddingV={10}
          type="button"
          onClick={handleClickEdit}
        >
          Done
        </StyledButton>
        <StyledButton paddingH={15} paddingV={10} type="submit">
          Submit
        </StyledButton>
      </div>
    </form>
  );
};

const OnShow = ({ profile, handleClickEdit }) => {
  return (
    <div className="intro-details">
      {profile && <p className="profile-header__intro">{profile.intro}</p>}
      <StyledButton
        paddingH={15}
        paddingV={8}
        marginV={10}
        type="button"
        onClick={handleClickEdit}
      >
        Edit
      </StyledButton>
    </div>
  );
};

const Profile = ({
  user,
  intro,
  profile,
  errors,
  loadProfile,
  createProfile,
  handleChange,
  updateProfile,
  clearProfileErrors,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = {
      user_id: user._id,
      intro,
    };
    if (!profile) createProfile(profile);
    else updateProfile(profile);

    setIsEdit(false);
  };

  const handleClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  useEffect(() => {
    if (user) loadProfile(user._id);
    if (errors) {
      history.push("/home");
      clearProfileErrors();
    }
  }, [user, errors]);

  return (
    <Wrapper>
      <Container>
        <div className="profile-header">
          {user && (
            <h1>Hi, My name is {`${user.firstName} ${user.lastName}`}</h1>
          )}

          {isEdit ? (
            <OnEdit
              intro={intro}
              profile={profile}
              handleChange={handleChange}
              handleClickEdit={handleClickEdit}
              handleSubmit={handleSubmit}
            />
          ) : (
            <OnShow profile={profile} handleClickEdit={handleClickEdit} />
          )}

          <StyledButton width="fit-content" paddingH={50} paddingV={10}>
            Message me
          </StyledButton>
          <LineSeperator />
        </div>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = ({ user, profile }) => ({
  user: user.user,
  intro: profile.intro,
  profile: profile.profile,
  errors: profile.errors,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (profile) => dispatch(updateProfile(profile)),
    loadProfile: (user_id) => dispatch(loadProfile(user_id)),
    createProfile: (profile) => dispatch(createProfile(profile)),
    handleChange: (value) => dispatch(handleChange(value)),
    clearProfileErrors: () => dispatch(clearProfileErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
