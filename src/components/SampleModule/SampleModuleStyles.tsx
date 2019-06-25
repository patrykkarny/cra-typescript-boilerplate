import { css, keyframes } from '@emotion/core';
import styled from 'utils/emotion';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const logo = css`
  animation: ${spin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

export const Wrapper = styled.div`
  text-align: center;
`;
