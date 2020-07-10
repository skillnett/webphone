import React from 'react';

export const PhoneInput = ({ inputValue }) => (
    <input
        type="text"
        className="dialpad__input"
        value={inputValue}
        onChange={() => null}
    />
);