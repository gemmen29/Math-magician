/* eslint-disable react/prefer-stateless-function */
import React from 'react';
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
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.buttonsClickHandler = this.buttonsClickHandler.bind(this);
    this.state = {
      currentObject: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  buttonsClickHandler(e) {
    const { currentObject } = this.state;
    const obj = calculate(currentObject, e.target.textContent);
    this.setState({ currentObject: obj });
  }

  render() {
    const { currentObject } = this.state;

    let inputValue = `${currentObject.total ?? ''}${
      currentObject.operation ?? ''
    }${currentObject.next ?? ''}`;

    if (inputValue.length === 0) {
      inputValue = '0';
    }

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
              onClick={this.buttonsClickHandler}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Calculator;
