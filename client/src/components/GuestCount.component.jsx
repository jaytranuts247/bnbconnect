import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { StyledButton as StyledButtonBase } from "../styles/Bases";
import {
  guestDecrement,
  guestIncrement,
} from "../redux/booking/booking.actions";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right}; ;
`;
Wrapper.defaultProps = {
  top: "90px",
  right: "0px",
};

const Seperator = styled.div`
  height: 1px;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  margin-top: 20px;
`;

const GuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 350px;
  white-space: nowrap;
  background: #fff;
  border-radius: 25px;
  padding: 20px;
  ${({ isBoxShadow }) =>
    isBoxShadow &&
    css`
      box-shadow: rgb(0 0 0 / 32%) 0px 6px 16px;
    `};

  div.guest-list:not(:first-child) {
    margin-top: 20px;
  }

  div.guest-list {
    display: flex;

    justify-content: space-between;
    align-items: center;
    .guest-type {
      display: flex;
      flex-direction: column;

      p.guest-type__name {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.04em;
      }
      p.guest-type__description {
        font-size: 14px;
        font-weight: 500;
        color: #ddd;
        margin-top: 3px;
      }
    }

    div.guest-count {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      font-size: 16px;
      font-weight: 400;

      button {
      }

      span {
        margin: 0 15px;
      }
    }
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 100%;
  height: 36px;
  width: 36px;
  outline: none;

  &:hover {
    border: 1px solid #222;
  }
  &:hover svg {
    color: #222;
  }

  ${({ iszero }) =>
    iszero
      ? css`
          border: 1px solid #ebebeb !important;
          cursor: not-allowed;
          &:hover {
            border: 1px solid #ebebeb !important;
          }
          &:hover svg {
            color: #ebebeb !important;
          }
        `
      : css`
          border: 1px solid #dddddd !important;
          &:hover {
            border: 1px solid #222 !important;
          }
          cursor: pointer !important;
        `};import { StyledButton } from '../styles/Bases';

`;

const StyledAddIcon = styled(AddIcon)`
  color: #ddd;
`;
const StyledRemoveIcon = styled(RemoveIcon)`
  color: ${({ iszero }) => (iszero ? "#ebebeb" : "#dddddd")};
`;

const GuestCount = ({
  adultsCount,
  childrenCount,
  infantsCount,
  guestIncrement,
  guestDecrement,
  top,
  right,
  isBoxShadow,
}) => {
  return (
    <Wrapper top={top} right={right}>
      <GuestContainer isBoxShadow={isBoxShadow}>
        <div className="guest-list">
          <div className="guest-type">
            <p className="guest-type__name">Adults</p>
            <p className="guest-type__description">Ages 13 or above</p>
          </div>
          <div className="guest-count">
            <StyledButton
              className="minus-btn"
              onClick={() => guestDecrement("adult")}
              iszero={adultsCount === 0 ? 1 : 0}
            >
              <StyledRemoveIcon iszero={adultsCount === 0 ? 1 : 0} />
            </StyledButton>
            <span>{adultsCount}</span>
            <StyledButton
              className="plus-btn"
              onClick={() => guestIncrement("adult")}
            >
              <StyledAddIcon />
            </StyledButton>
          </div>
        </div>
        <Seperator />
        <div className="guest-list">
          <div className="guest-type">
            <p className="guest-type__name">Children</p>
            <p className="guest-type__description">Ages 2-12</p>
          </div>
          <div className="guest-count">
            <StyledButton
              className="minus-btn"
              onClick={() => guestDecrement("children")}
              iszero={childrenCount === 0 ? 1 : 0}
            >
              <StyledRemoveIcon iszero={childrenCount === 0 ? 1 : 0} />
            </StyledButton>
            <span>{childrenCount}</span>
            <StyledButton
              className="plus-btn"
              onClick={() => guestIncrement("children")}
            >
              <StyledAddIcon />
            </StyledButton>
          </div>
        </div>
        <Seperator />
        <div className="guest-list">
          <div className="guest-type">
            <p className="guest-type__name">Infants</p>
            <p className="guest-type__description">Under 2</p>
          </div>
          <div className="guest-count">
            <StyledButton
              className="minus-btn"
              onClick={() => guestDecrement("infant")}
              iszero={infantsCount === 0 ? 1 : 0}
            >
              <StyledRemoveIcon iszero={infantsCount === 0 ? 1 : 0} />
            </StyledButton>
            <span>{infantsCount}</span>
            <StyledButton
              className="plus-btn"
              onClick={() => guestIncrement("infant")}
            >
              <StyledAddIcon />
            </StyledButton>
          </div>
        </div>
      </GuestContainer>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  adultsCount: state.booking.adultsNum,
  childrenCount: state.booking.childrenNum,
  infantsCount: state.booking.infantsNum,
});

const mapDispatchToProps = (dispatch) => ({
  guestIncrement: (guestType) => dispatch(guestIncrement(guestType)),
  guestDecrement: (guestType) => dispatch(guestDecrement(guestType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestCount);
