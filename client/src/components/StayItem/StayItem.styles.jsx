import styled from "styled-components";

export const ListingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px 10px;
  margin: 10px;
  cursor: pointer;

  .left-side {
    display: flex;
    flex: 0 0 300px;
    overflow: hidden;

    /* padding: 5px 10px; */

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
        right: 20px;
      }
      .slick-prev {
        left: 20px;
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

  .right-side {
    display: flex;
    flex-direction: column;
    flex: 1 1 55%;
    max-width: 100%;
    margin-left: 16px;
    .listing-title {
      display: flex;
      flex-direction: column;
      width: 100%;
      span {
        /* text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden; */
        word-break: break-all;
        /* width: 300px; */
      }
      &__type {
        font-size: 14px;
        color: #717171;
      }
      &__title {
        font-size: 18px;
        color: #222222;
        margin: 3px 0 0 0;
        width: 392px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .listing-preview {
      display: flex;
      flex-direction: column;

      &__info {
        display: flex;
        align-items: center;

        &--details {
          color: #717171;
          font-size: 14px;
          font-weight: 300;
        }
      }

      &__amenities {
        display: flex;
        align-items: center;
        &--details {
          color: #717171;
          font-size: 14px;
          font-weight: 300;
        }
      }
    }

    .price-review-info {
      display: flex;
      flex: 1;
      align-items: flex-end;

      .price-review-info-container {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .review-info {
          display: flex;
          align-items: flex-end;
          font-size: 14px;

          &__details {
            display: flex;
            align-items: center;
            span#rating {
              font-weight: 700;
              margin-left: 3px;
            }
            span#review-number {
              margin-left: 5px;
              color: #717171;
            }
          }
        }

        .price-details {
          display: flex;
          align-items: flex-end;
          padding: 0 5px;
          flex-direction: column;
          color: #222222;
          z-index: 10;
          margin-right: 10px;
          /* white-space: normal;
          word-break: break-word; */

          &__price-per-night {
            font-size: 18px;

            display: flex;
            #price {
              font-weight: 700;
            }
            #night {
              letter-spacing: 0.04rem;
            }
          }

          &__price-total {
            margin-top: 3px;
            font-size: 14px;
            color: #717171;
            text-decoration: underline;
            white-space: nowrap;
          }
        }
      }
    }
  }
`;

export const ShortSeperator = styled.div`
  height: 1px;
  width: ${({ width }) => width}px;
  border-top: 1px solid #ebebeb;
  display: block;
  margin: 10px 0;
`;

export const DotSeperator = styled.span`
  display: flex;
  align-items: center;
  margin: 0 ${({ margin }) => margin || 0}px;
  &::before {
    content: "•";
    display: flex;
    color: ${({ color }) => color || "black"};
    font-size: ${({ fontSize }) => fontSize || 10}px;
  }
`;
