import styled, { css } from "styled-components";
// import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

export const Marker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  /* border-radius: ${({ borderRadius }) => borderRadius}px; */
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ borderSize }) => borderSize}px solid
    ${({ borderColor }) => borderColor};
  background: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ paddingV, paddingH }) => `${paddingV} ${paddingH}`};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ color }) => color};

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
  borderRadius: "50%",
  borderSize: 1,
  borderColor: "#ebebeb",
  backgroundColor: "#fff",
  paddingH: "12px",
  paddingV: "16px",
  color: "#fff",
};
