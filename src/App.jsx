import './App.css';
import styles from './styles.module.css';
import { useState } from 'react';

function App() {
  const [userButton, setUserButton] = useState('day');
  const onButtonClick = (event) => {
    setUserButton(event.target.value);
  };
  return (
    <div className="container">
      <div className="btnToggle">
        <button value="night" onClick={onButtonClick}>Night</button>
        <button value="day" onClick={onButtonClick}>Day</button>
      </div>
      <div className={`${styles[userButton]}`}>

      </div>
    </div>
  );
}

export default App;
