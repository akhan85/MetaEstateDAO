import { render } from '@testing-library/react';
import { LazyMotion, domAnimation } from 'framer-motion';

const AllTheProviders = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };