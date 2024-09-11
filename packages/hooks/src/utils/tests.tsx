import { renderHook } from '@testing-library/react';
import { StrictMode } from 'react';

export * from '@testing-library/react';

const Wrapper = process.env.REACT_MODE === 'strict' ? StrictMode : undefined;

const customRender: typeof renderHook = (ui, options) =>
  renderHook(ui, { wrapper: Wrapper, ...options });

export { customRender as renderHook };
