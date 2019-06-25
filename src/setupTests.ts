import {
  matchers,
  createSerializer as createEmotionSerializer,
} from 'jest-emotion';

import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers);
expect.addSnapshotSerializer(createEmotionSerializer());
