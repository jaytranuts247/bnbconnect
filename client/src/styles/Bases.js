import styled from "styled-components";
import Alert from "@material-ui/lab/Alert";

export const Wrapper = styled.div`
  display: flex;
`;

export const StyledAlert = styled(Alert)`
  display: flex;
  align-items: center;
  font-size: 12px !important;
`;

export const LineSeperator = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
`;

LineSeperator.defaultProps = {
  borderColor: "#ebebeb",
};

export const DotSeperator = styled.span`
  display: flex;
  height: 20px;
  width: 20px; 
  &::before {
    content: "\00B7";
    height: 20px;
    width: 20px;
    display: flex;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ paddingV, paddingH }) => `${paddingV}px ${paddingH}px`};
  margin: ${({ marginV, marginH }) => `${marginV}px ${marginH}px`};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ fontColor }) => fontColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background: ${({ backgroundColor }) => backgroundColor};
  font-weight: 600;
  letter-spacing: 0.01em;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  outline: ${({ outline }) => outline};

  &:hover {
    background: ${({ backgroundColorHover }) => backgroundColorHover};
    text-decoration: ${({ textDecorationOnHover }) => textDecorationOnHover};
  }
`;

StyledButton.defaultProps = {
  width: "auto",
  height: "auto",
  paddingH: 20,
  paddingV: 15,
  marginH: 0,
  marginV: 20,
  fontSize: 16,
  fontColor: "#222222",
  borderColor: "#222222",
  borderRadius: 5,
  backgroundColor: "#ffffff",
  backgroundColorHover: "#f7f7f7",
  backgroundPosition: "center",
  outline: "none",
  textDecorationOnHover: "none",
};
