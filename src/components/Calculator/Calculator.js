import { useState, useEffect } from 'react';
import styles from './Calculator.module.css';
import Button from '../UI/Button/Button';
import calculate from '../../logic/calculate';

const buttons = [
  {
    id: Math.random(),
    text: 'AC',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '+/-',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '%',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '÷',
    backgroundColor: 'orange',
  },
  {
    id: Math.random(),
    text: '7',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '8',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '9',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: 'x',
    backgroundColor: 'orange',
  },
  {
    id: Math.random(),
    text: '4',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '5',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '6',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '+',
    backgroundColor: 'orange',
  },
  {
    id: Math.random(),
    text: '1',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '2',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '3',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '-',
    backgroundColor: 'orange',
  },
  {
    id: Math.random(),
    text: '0',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '.',
    backgroundColor: 'gray',
  },
  {
    id: Math.random(),
    text: '=',
    backgroundColor: 'orange',
  },
];

const Calculator = () => {
  const [currentObject, setCurrentObject] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [inputValue, setInputValue] = useState('0');

  const buttonsClickHandler = (e) => {
    const obj = calculate(currentObject, e.target.textContent);
    if (obj.total !== undefined || obj.next !== undefined) {
      setCurrentObject(obj);
    }
  };

  useEffect(() => {
    let value = `${currentObject.total ?? ''}${currentObject.operation ?? ''}${
      currentObject.next ?? ''
    }`;
    if (value.length === 0) {
      value = '0';
    }
    setInputValue(value);
  }, [currentObject]);

  return (
    <>
      <div className={styles.calculator}>
        <input
          className={styles.calculator__output}
          value={inputValue}
          disabled
        />
        {buttons.map((button) => (
          <Button
            key={button.id}
            text={button.text}
            backgroundColor={button.backgroundColor}
            onClick={buttonsClickHandler}
          />
        ))}
      </div>
    </>
  );
};

export default Calculator;
