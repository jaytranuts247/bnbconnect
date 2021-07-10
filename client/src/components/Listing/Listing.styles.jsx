import styled from "styled-components";
import { Medal } from "@styled-icons/remix-line/Medal";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 80px;
  /* width: 100vw; */
  margin: 0 auto;
  & > * {
    max-width: 1280px;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  .listing-title {
    font-size: 26px;
    font-weight: 600;
  }

  .listing-details {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;

    & > div {
      display: flex;
      align-items: center;
    }

    &__review {
      span#ratings {
        margin-left: 5px;
      }
      span#review-number {
        margin-left: 5px;
        color: #717171;
      }
    }

    &__super-host {
      margin-left: 10px;
      span#superHost {
        margin-left: 5px;
      }
    }

    &__location {
      margin-left: 30px;
      span {
        font-weight: 700;
        text-decoration: underline;
        color: #717171;
      }
    }
  }
`;

export const ImagePreviewSection = styled.div`
  display: flex;
  width: 100%;
  border: none;
  outline: none;
  margin: 20px 0;
  max-width: 1280px;

  .image-preview-container {
    display: flex;
    width: 100%;
    overflow: hidden;
    border: none;
    outline: none;
    border-radius: 15px;
    .primary-column,
    .secondary-column {
      display: flex;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        cursor: pointer;
        transition: all 0.5s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .primary-column {
      flex: 2;
      height: 560px;
      width: 560px;
    }
    .secondary-column {
      flex: 1;
      flex-direction: column;
      margin-left: 8px;
      .sub-column {
        display: flex;
        flex: 1;
        overflow: hidden;
      }
      .sub-column:first-child {
        margin-bottom: 8px;
      }
    }
  }
`;

export const MainSection = styled.div`
  display: flex;
  position: relative;
  max-width: 1280px;
  width: 100%;
  padding: 20px 0;
  margin-top: 20px;
  font-size: 14px;
`;

export const MainContent = styled.div`
  flex: 1 1 60%;
  padding-right: 20px;

  /* padding: 30px 50px 0; */

  .listing-type {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 14px;
    margin: 10px 0 30px;
    align-items: center;

    .listing-kicker-content {
      display: flex;
      flex-direction: column;
      .kicker-content {
        font-size: 26px;
        font-weight: 600;
        line-height: 26px;
        margin-bottom: 10px;
      }
      .preview-info {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }

  .listing-description {
    display: flex;
    width: 100%;
    padding: 30px 0;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const SideForm = styled.div`
  flex: 1 1 450px;
  display: flex;
  flex-direction: column;

  .form-container {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 380px;
    width: 100%;
    margin-left: auto;
    padding: 24px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
    position: sticky;
    top: 40px;

    .listing-info {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      margin-bottom: 24px;

      &__price {
        display: flex;
        align-items: baseline;
        & > #price {
          font-size: 22px;
          font-weight: 600;
          margin-right: 5px;
        }
      }
      &__review {
        display: flex;
        align-items: center;
        font-size: 12px;
        span#ratings {
          margin-left: 5px;
          font-weight: 700;
        }
        span#review-number {
          margin-left: 5px;
          color: #717171;
        }
      }
    }

    .booking-form {
      input {
        border: none;
        outline: none;
      }
      .booking-form-container {
        display: flex;
        width: 100%;
        flex-direction: column;
        border: 1px solid #0000004a;
        border-radius: 10px;
        font-size: 12px;
        /* padding: 8px; */

        .booking-form__date {
          display: flex;
          width: 100%;
          align-items: center;

          &:hover {
            border: 1px solid #222222;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }

          &--checkIn,
          &--checkOut {
            flex: 0 0 50%;
            display: flex;
            flex-direction: column;
            padding: 10px;

            label {
              font-weight: 700;
              padding-bottom: 5px;
              font-size: 10px;
            }
            span {
              font-size: 14px;
            }
          }

          /* padding: 8px; */
          &--checkIn {
            border-right: 1px solid #0000004a;
          }
          &--checkOut {
          }
        }
        .booking-form__guest {
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          padding: 10px;
          border-top: 1px solid #0000004a;
          label {
            font-weight: 700;
            padding-bottom: 5px;
            font-size: 10px;
          }
          span {
            font-size: 14px;
          }
        }
      }
    }

    .no-charging {
      margin: 0 auto;
      margin-bottom: 20px;
    }

    .listing-services-info {
      display: flex;
      flex-direction: column;

      .listing-fee,
      .service-fee {
        display: flex;
        justify-content: space-between;
        font-size: 16px;

        .listing-fee__details,
        .service-fee__details {
          text-decoration: underline;
          padding-bottom: 15px;
        }
      }
      .total-price {
        margin-top: 28px;
        font-weight: 700;
        .service-fee__details {
          text-decoration: none !important;
        }
      }
    }
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 130px;
  right: -20px;
  z-index: 30;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 32%) 0px 6px 16px;
  & > * {
    z-index: 30;
  }
  .close {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const GuestPick = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 20px 0; */
  background: #fff;
  z-index: 30;
  position: absolute;
  top: 185px;
  right: 12px;
  box-shadow: rgb(0 0 0 / 32%) 0px 6px 16px;
  border-radius: 25px;

  /* height: auto;
  min-width: auto; */

  .guest-pick-container {
    position: relative;
    display: flex;
    min-height: 10px;
    /* height: auto; */
    flex-direction: column;

    .guest-dummy {
      display: flex;
      width: 350px;
      height: 240px;
    }
    .close {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      position: relative;
      padding: 0 20px;
    }
  }
`;

export const AmenitySection = styled.div`
  display: flex;
  width: 100%;

  .listing-amenities {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 40px 0px;
    color: #222222;

    &__title {
      margin-bottom: 24px;
    }

    &__list {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      &--item {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0px 0 20px;
        font-size: 16px;
        flex: 0 0 50%;

        .icon {
          margin-right: 10px;
          width: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        span {
          /* margin-left: 10px; */
        }
      }
    }
  }
`;

export const CalendarBookingSection = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 0;

  .listing-calendar {
    .date-booking {
      margin-bottom: 25px;
      &__title {
      }
      &__date-range {
        color: #717171;
      }
    }
    .date-range-picker {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`;

export const ReviewSection = styled.div`
  display: flex;
  width: 100%;

  .review-container {
    padding: 40px 0;
    width: 100%;

    .review-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 30px;
      span#ratings {
        margin-left: 10px;
      }
      span#review-number {
        margin-left: 5px;
      }
    }

    .review-details {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      font-size: 16px;
      margin-bottom: 32px;
      .review-item {
        display: flex;
        flex: 0 0 50%;
        justify-content: space-between;
        align-items: center;
        padding-right: 80px;
        padding-bottom: 20px;
        &__type {
        }
        &__rating {
          display: flex;
          flex-direction: row;
          align-items: center;

          .MuiLinearProgress-determinate {
            width: 100px;
            margin-right: 15px;
          }
          .MuiLinearProgress-barColorPrimary {
            background-color: #222 !important;
          }

          & > .rating {
            width: 20px;
            margin-left: 10px;
          }
        }
      }
    }

    .review-list {
      display: flex;
      width: 100%;
      flex-flow: row wrap;
      max-height: 1000px;
      overflow: auto;

      .review-list-container {
        flex: 0 0 50%;
        padding: 0px 50px 20px 0;
        .review-list-info {
          display: flex;
          align-items: center;
          &__author {
            margin-left: 10px;
            line-height: 20px;
            &--name {
              font-size: 16px;
              font-weight: 600;
            }
            &--date {
              font-size: 14px;
              color: #717171;
            }
          }
        }

        .review-list-content {
          font-size: 16px;
          padding: 10px 0;
          line-height: 24px;
        }
      }
    }
  }
`;

export const LocationSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 50px;

  .section-header {
    font-size: 20px;
  }

  .listing-location {
    font-size: 16px;
    margin: 10px 0 30px;
    color: #717171;
  }
`;

export const StyledMedal = styled(Medal)`
  color: #ff385c;
`;
