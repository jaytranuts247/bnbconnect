import { Button } from "@material-ui/core";
import styled from "styled-components";

export const StyledFilterButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  padding: 8px 16px;
  border-radius: 32px;
  border: 1px solid #ebebeb;
  background: transparent;
  letter-spacing: 0.01em;
  color: #222222;
  cursor: pointer;
  &:hover {
    border: 1px solid #333;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0 20px;

  .listing-location {
    padding: 20px 0;
    .listing-location__name {
      font-size: 1.6rem;
      padding: 10px 0;
    }
    .listing-location__filters {
      button:not(:first-child) {
        margin-left: 10px;
      }
    }
  }

  .bnb-listing {
    display: flex;
    flex-direction: column;
    position: relative;

    .bnb-listing__item {
      width: 100%;
      padding: 18px 0px;
    }
  }
`;

export const HSeperator = styled.div`
  width: 100%;
  height: 1px;
  width: 100%;
  border-top: 1px solid #ebebeb;
`;
