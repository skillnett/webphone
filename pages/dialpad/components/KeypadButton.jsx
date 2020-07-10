import React from 'react';
import cn from 'classnames';

export const KeypadButton = ({ number, setInputValue, letters, centered }) => (
    <button
        type="button"
        onClick={() => setInputValue(number)}
        className={cn("dialpad__keypad-btn", "d-flex flex-column align-items-center", centered && "justify-content-center")}
    >
        <span className="dialpad__keypad-btn__number">{number}</span>
        <span className="dialpad__keypad-btn__text">{letters}</span>
    </button>
);