import React from 'react';
import { Global, SerializedStyles } from '@emotion/core';

import globalStyles from './styles';

interface IProps {
  styles?: SerializedStyles;
}

export const GlobalStyles = ({ styles }: IProps) => (
  <Global styles={[globalStyles, styles]} />
);
