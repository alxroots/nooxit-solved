import { render, screen } from '@testing-library/react';

import { BoxCounter } from './index';

describe('BoxCounter', () => {
  const renderBoxCounter = (counter: number) => {
    render(<BoxCounter counter={counter} />);
  };

  test('renders the correct counter value', () => {
    const testCounterValue = 5;
    renderBoxCounter(testCounterValue);

    const counterValue = screen.getByText(testCounterValue.toString());
    expect(counterValue).toBeInTheDocument();
  });

  test('renders "Elements" text', () => {
    renderBoxCounter(0);

    const elementsText = screen.getByText('Elements');
    expect(elementsText).toBeInTheDocument();
  });

  test('displays the correct counter value when changed', () => {
    const testCounterValue = 10;
    renderBoxCounter(testCounterValue);

    const counterValue = screen.getByText(testCounterValue.toString());
    expect(counterValue).toBeInTheDocument();
  });
});
