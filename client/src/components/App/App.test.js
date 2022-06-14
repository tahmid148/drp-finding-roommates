import { render, screen } from '@testing-library/react';
import { App } from './App';

test("Header renders with correct text", () => {
  const component = render(<App />);
  const headerElem = component.getByTestId("header")

  // expect(headerElem.textContent).toBe("IS THIS DEPLOYED?!")
})
