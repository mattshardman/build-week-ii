import React from "react";
import styled from "styled-components";

const LoadingImage = styled.img`
  animation-name: spin;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

function LoadingSpinner() {
  return (
    <LoadingImage
      src="https://image.flaticon.com/icons/svg/148/148813.svg"
      alt=""
      height={35}
    />
  );
}

export default LoadingSpinner;
