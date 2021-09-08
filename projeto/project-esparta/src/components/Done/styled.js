import { Button, Typography } from "@material-ui/core";
import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
from{
    opacity: 0;
    transform: translateX(-50px);
}
to{
    opacity: 1;
    transform: translateX(0px)
}
`;
export const ContainerAnimation = styled.li`
  animation: ${appearFromLeft} 1s;
  text-transform: lowercase;
  font-family: "Quicksand", sans-serif;
`;
export const StyledTypography = styled(Typography)`
  && {
    font-family: "Quicksand", sans-serif;
  }
`;
export const StyledDialogTitle = styled.h2`
  font-family: "Quicksand", sans-serif;
  margin: 0 10px;
  padding: 8px;
  font-weight: 500;
  text-align: center;
`;
export const StyledButton = styled(Button)`
  && {
    font-family: "Quicksand", sans-serif;
    color: #8117e4;
  }
`;
