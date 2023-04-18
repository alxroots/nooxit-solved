import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

import { BoxColumns } from '../types/global-types';

interface GlobalContextDataProps {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
  boxes: BoxColumns[];
  setBoxes: Dispatch<SetStateAction<BoxColumns[]>>;
  selectedAction: 'add' | 'remove' | null;
  setSelectedAction: Dispatch<SetStateAction<'add' | 'remove' | null>>;
  prevSelectedAction: 'add' | 'remove' | null;
  setPrevSelectedAction: Dispatch<SetStateAction<'add' | 'remove' | null>>;
}

interface GlobalProviderDataProps {
  children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextDataProps>(
  {} as GlobalContextDataProps,
);

export function GlobalProvider({ children }: GlobalProviderDataProps) {
  const [color, setColor] = useState('');
  const [counter, setCounter] = useState(0);
  const [boxes, setBoxes] = useState([] as BoxColumns[]);
  const [selectedAction, setSelectedAction] = useState<'add' | 'remove' | null>(
    null,
  );
  const [prevSelectedAction, setPrevSelectedAction] = useState<
    'add' | 'remove' | null
  >(null);

  return (
    <GlobalContext.Provider
      value={{
        color,
        setColor,
        counter,
        setCounter,
        boxes,
        setBoxes,
        selectedAction,
        setSelectedAction,
        prevSelectedAction,
        setPrevSelectedAction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
