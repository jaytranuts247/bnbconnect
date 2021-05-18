import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 80px;
  max-width: 900px;
  margin: 0 auto;
  flex-direction: column;

  .booking-title {
    line-height: 20px;
    margin-bottom: 20px;
    h1.upcoming-plan {
      font-size: 28px;
      font-weight: 600;
    }
    p {
      font-size: 18px;
    }
  }

  .user-bookings {
    display: flex;
    flex-direction: column;
    width: 100%;

    .booking-info:last-child {
      border-bottom: 1px solid #ebebeb;
    }

    .booking-info {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 20px 10px;
      margin: 10px;
      border-top: 1px solid #ebebeb;

      a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }

      cursor: pointer;
      .booking-info__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        .date-range {
          display: flex;
          align-items: center;
          font-size: 18px;
          font-weight: 500;
          /* margin-bottom: 20px; */
        }
      }
      .booking-info__content {
        display: flex;
        overflow: hidden;
        position: relative;
        .left-side {
          display: flex;
          flex-direction: column;
          flex: 0 0 300px;
          overflow: hidden;
          .slider {
            overflow: hidden;
            .slider-container {
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
              border-radius: 12px;
              position: relative;

              .slick-slider {
                min-height: 0;
                min-width: 0;
              }
              .slick-slide {
              }

              .slick-slide img {
                margin: auto;
                object-fit: cover;
                height: 200px;
                width: 300px;
              }

              .slick-dots {
                bottom: 10px;
                li,
                li button,
                li button::before {
                  width: 15px;
                  height: 15px;
                }
                li {
                  margin: 0;
                  button {
                    padding: 3px;
                  }
                }
              }
              .slick-dots li button::before {
                color: #fff;
              }
              .slick-next {
                right: 10px;
              }
              .slick-prev {
                left: 10px;
              }
              .slick-arrow {
                z-index: 10;
                height: 28px;
                width: 28px;

                &::before {
                  font-size: 28px;
                }
              }
            }
          }
        }

        .right-side {
          display: flex;
          flex: 1 1 55%;
          padding: 10px 20px;

          .listing-info {
            display: flex;
            flex-direction: column;
            width: 100%;

            &__title {
              line-height: 24px;
              #listing-name {
                font-size: 20px;
                font-weight: 700;
              }
              #listing-address {
                font-size: 16px;
                font-weight: 500px;
                padding-top: 5px;
              }
            }

            &__fee {
              display: flex;
              flex: 1;
              align-items: flex-end;
              justify-content: flex-end;

              &--price {
                display: flex;
                align-items: flex-end;
                font-size: 16px;
                #price {
                  font-weight: 600;
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
