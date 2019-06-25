import React from 'react';

import { ReactComponent as Logo } from 'assets/icons/logo.svg';

import { SampleHeader } from 'components/common/SampleHeader/SampleHeader';

import { Wrapper, logo } from './SampleModuleStyles';

export const SampleModule = () => (
  <Wrapper>
    <SampleHeader>
      <Logo css={logo} />
      <p>CRA TypeScript Biolerplate</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        rel="noopener noreferrer"
        target="_blank"
      >
        Learn React
      </a>
    </SampleHeader>
  </Wrapper>
);

// lazy loaded modules should be exported as default
export default SampleModule;
