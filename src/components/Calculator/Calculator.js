/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styles from './Calculator.module.css';
import Button from '../UI/Button/Button';

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
    text: '/',
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
class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className={styles.calculator}>
          <div className={styles.calculator__output}>0</div>
          {buttons.map((button) => (
            <Button
              key={button.id}
              text={button.text}
              backgroundColor={button.backgroundColor}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Calculator;
