import { BoxCounterWrapper } from './BoxCounter.styles';

interface BoxCounterDataProps {
  counter: number;
}

export function BoxCounter({ counter }: BoxCounterDataProps) {
  return (
    <BoxCounterWrapper>
      <span>{counter}</span>
      <span>Elements</span>
    </BoxCounterWrapper>
  );
}
