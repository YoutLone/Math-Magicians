import React from 'react';
import './Calculator.css';
import Button from './Buttons';

function Calculator() {
  return (
    <div className="calculator">
      <div className="screen">
        <input type="text" placeholder="0" readOnly />
      </div>
      <Button type="button" text="AC" />
      <Button type="button" text="+/-" />
      <Button type="button" text="%" />
      <Button type="button" text="÷" className="box-color" />

      <Button type="button" text="7" />
      <Button type="button" text="8" />
      <Button type="button" text="9" />
      <Button type="button" text="*" className="box-color" />

      <Button type="button" text="4" />
      <Button type="button" text="5" />
      <Button type="button" text="6" />
      <Button type="button" text="-" className="box-color" />

      <Button type="button" text="1" />
      <Button type="button" text="2" />
      <Button type="button" text="3" />
      <Button type="button" text="+" className="box-color" />

      <Button type="button" text="0" className="span-box" />

      <Button type="button" text="." />
      <Button type="button" text="=" className="box-color" />
    </div>
  );
}

export default Calculator;
