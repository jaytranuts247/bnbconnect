import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { motion } from "framer-motion";

export const StyledHeader = styled(motion.div)`
  width: 100vw;
  height: 80px;
  overflow: visible;
  z-index: 35;
`;

export const HeaderContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  background: #ffffff;
  z-index: 350;
  padding: 0 80px;
  position: relative;
  overflow: visible;
  transition: all 0.3s ease;

  ${({ isHome }) =>
    isHome === 1
      ? css`
          background: transparent !important;
        `
      : css`
          background: #ffffff !important;
          border-bottom: 1px solid #ebebeb;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        `};
  /* 
  div.search-bar-container {
    display: flex;
    margin: 20px 0 50px;
    transition: all 0.3s ease;

    ${({ onSearch }) =>
    onSearch &&
    css`
      transform: translate(0, -140px) scale(0);
    `};
  } */

  .search-header {
    display: flex;
    align-items: flex-start;
    width: 100%;

    img.header__icon {
      object-fit: contain;
      height: 80px;
      /* margin-left: 20px; */
      width: auto;
      cursor: pointer;
    }
    img {
      object-fit: contain;
      height: 60px;
      /* margin-left: 20px; */
      /* width: 300px; */
      margin: auto 0;
      cursor: pointer;
    }

    div.header__between {
      flex: 1 0 0;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      div.bar-container {
        display: flex;
        /* flex-direction: column-reverse; */

        div.info-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          min-width: 300px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.8;
          border: 1px solid #ebebeb;
          height: 100%;

          &:hover {
            box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.15);
          }

          div.info-bar__location,
          div.info-bar__date {
            padding: 10px 20px;
            display: flex;
            height: 100%;
          }

          div.info-bar__location {
          }
          div.info-bar__date {
          }
          div.info-bar__guest {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            /* padding: 10px 0 10px 20px; */
            div {
              padding: 10px 0 10px 20px;
            }

            ${({ isNoGuest }) =>
              isNoGuest &&
              css`
                color: #717171 !important;
                font-weight: 400 !important;
              `};

            span {
              text-overflow: ellipsis;
              margin: 0 10px 0 2px;
            }
          }
        }
      }
    }

    div.header__right {
      margin-left: auto;
      display: flex;
      align-items: center;
      height: 80px;
      /* margin-right: 20px; */

      /* &::before {
        content: " ";
        display: flex;
        height: 80px;
        min-width: 20px;
        position: absolute;
        background: yellow;
      } */

      .MuiButton-text {
        margin-left: 10px;
        border-radius: 50px;
        span {
          color: #222222;
          font-size: 1.4rem;
        }
      }

      div.header__profile {
        background: #fff;
        padding: 7px 5px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        border: 1px solid #b9b9b9;

        svg {
          height: 2rem;
          width: 2rem;
          margin-left: 10px;
        }

        svg#profile-icon {
          height: 3rem;
          width: 3rem;
        }

        .menu-dropdown {
          width: 200px;
          position: absolute;
          top: 60px;
          right: 0;
          /* padding: 7px 14px; */
          background: #fff;
          font-size: 1.5rem;
          line-height: 1.5;
          border-radius: 10px;
          color: #222222;
          z-index: 10;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);

          div.sign-up,
          div.log-in,
          .dropdown-item {
            width: 100%;
            display: flex;
            padding: 0px 10px;
            &:hover {
              background: #eeeeeeb5;
            }
            p {
              margin: 10px;
            }
          }
        }
      }
    }
  }
`;

export const StyledButton = styled(Button)`
  /* background-color: #6772e5; */
  color: #fff;
  /* box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;

const ButtonBase = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff385c;
  color: #fff;
  margin-right: 10px;
  border: none;
  outline: none;

  span {
    font-weight: 600;
    font-size: 1.4rem;
    margin-left: 10px;
  }
`;

export const StyledButtonCircle = styled.button`
  ${ButtonBase}
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100%;
  z-index: 3;
`;

export const StyledMenuIcon = styled(MenuIcon)`
  color: #222222;
  font-size: 2rem;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: #fff;
  /* background: #ff385c; */
  height: 1.8rem !important;
  width: 1.8rem !important;
  border-radius: 100%;
`;

export const Seperator = styled.div`
  align-self: center !important;
  border-right: 1px solid #ddd;

  flex: 0 0 0px;
  height: 28px;
`;

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.5);

  /* height: 100vh;
	width: 100vw; */

  .modal-child {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 450px;
  }
`;

export const SearchBarContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin: 0 0 40px; */
  /* padding-bottom: 30px; */
  z-index: 35;
  width: 100%;
  /* background: #fff; */
  overflow: visible;
  /* box-shadow: rgb(0 0 0 / 32%) 0px 6px 16px; */

  .places-to-stay {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    color: #222;
    span {
      line-height: 20px;
      position: relative;

      &::after {
        content: " ";
        position: absolute;
        width: 25%;
        height: 2px;
        background: #222;
        display: flex;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%);
        transition: all 0.3s ease;
      }

      /* &:hover::after {
        width: 25%;
      } */
    }
  }
`;
