import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App2 from './App';

const rootElement = document.getElementById('root2') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App2 />
  </StrictMode>
);
