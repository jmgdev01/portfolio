import React from 'react';
import './Button.css';

const STYLES = ['btn--solid', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
const COLOR = ['btn--light', 'btn--primary', 'btn--dark'];
const HOVER = ['btn--hover--light', 'btn--hover--primary', 'btn--hover--dark'];

export const Button = ({
  text,
  icon,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  buttonHover
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor)
    ? buttonColor
    : COLOR[0];

  const checkButtonHover = HOVER.includes(buttonHover)
    ? buttonHover
    : HOVER[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor} ${checkButtonHover} flex flex-row justify-center items-center font-bold m-2 uppercase`}
        onClick={onClick}
        type={type}
      >
        <span className='mr-2'>{text}</span>{icon}
      </button>
  )
};
