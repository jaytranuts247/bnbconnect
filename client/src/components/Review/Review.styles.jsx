import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 400;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  form.review-card {
    background: #fff;
    padding: 42px 26px 20px 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    position: relative;
    border-radius: 20px;

    h1 {
      font-size: 28px;
    }

    .review-ratings {
      display: flex;
      flex-flow: row wrap;
      padding: 20px;
      margin-bottom: 10px;

      .rating-info {
        display: flex;
        flex: 0 0 50%;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        width: 80%;
        padding-top: 5px;

        .rating-type {
          span {
            margin-left: 3px;
            font-size: 16px;
            font-weight: 500;
          }
        }

        .rating-star {
          padding-top: 2px;
        }
      }
    }

    .review-content {
      display: flex;
      width: 100%;

      textarea {
        margin: 0 auto;
        padding: 8px;
        border-radius: 5px;
        outline: none;
        margin-bottom: 10px;
      }
    }
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px !important;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
