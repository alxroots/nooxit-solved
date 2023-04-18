import { useContext } from 'react';

import { BoxCanvas } from './components/BoxCanvas';
import { ClearButton } from './components/ClearButton';
import { BoxCounter } from './components/BoxCounter';
import { ActionButton } from './components/ActionButton';
import { GlobalContext } from './context/GlobalContext';
import { ColorPicker } from './components/ColorPicker';
import { Tutorial } from './components/Tutorial';
import { ActionButtonWrapper } from './components/ActionButton/ActionButton.styles';
import { SideMenu } from './layout/Sidemenu.styles';

import './App.css';

function App() {
  const { setColor, setCounter, counter, setBoxes, selectedAction, color } =
    useContext(GlobalContext);

  const getCursorClass = () => {
    if (selectedAction === 'add') {
      return 'cursor-pencil';
    } else if (selectedAction === 'remove') {
      return 'cursor-eraser';
    }
    return '';
  };

  return (
    <div className={`app-grid ${getCursorClass()}`}>
      <SideMenu>
        <ColorPicker setColor={setColor} color={color} />
        <ActionButtonWrapper>
          <ActionButton action={'add'} />
          <ActionButton action={'remove'} />
        </ActionButtonWrapper>
        <BoxCounter counter={counter} />
        <ClearButton setCounter={setCounter} setBoxes={setBoxes} />
        <Tutorial />
      </SideMenu>
      <BoxCanvas />
    </div>
  );
}

export default App;
