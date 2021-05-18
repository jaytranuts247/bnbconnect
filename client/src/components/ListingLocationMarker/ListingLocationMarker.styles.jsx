import styled, { css } from "styled-components";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

export const Marker = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  border: ${({ borderSize }) => borderSize}px solid
    ${({ borderColor }) => borderColor};
  background: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ paddingV, paddingH }) => `${paddingV} ${paddingH}`};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ clicked }) =>
    clicked &&
    css`
      color: #fff !important;
      background: #222222 !important;
    `};

  &:hover {
    transform: scale(1.1);
    z-index: 20;
  }
`;

Marker.defaultProps = {
  height: "auto",
  width: "auto",
  borderRadius: 20,
  borderSize: 1,
  borderColor: "#ebebeb",
  backgroundColor: "#fff",
  paddingH: "12px",
  paddingV: "16px",
};

export const StyledTagIcon = styled(LoyaltyIcon)`
  margin-left: 5px;
  color: #ff385cee;
`;
/* padding: ${({ paddingV }) => paddingV}px ${({ paddingH }) =>
    paddingH}px; */
