import React from 'react';

import { render } from 'utils/tests';

import { SampleModule } from './SampleModule';

describe('SampleModule', () => {
  test('should render component', () => {
    const { container } = render(<SampleModule />);

    expect(container).toBeInTheDocument();
  });
});
