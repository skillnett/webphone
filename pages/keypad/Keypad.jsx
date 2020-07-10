import React from 'react';
import { PhoneKeypad } from '../dialpad/components/PhoneKeypad';
import { PhoneInput } from '../dialpad/components/PhoneInput';
import { useDispatch, useSelector } from 'react-redux';
import { changePhoneNumber } from '../../store/appReducers/dialpad';
import { useEffect } from 'react';

export const Keypad = () => {

    const dispatch = useDispatch();
    const enteredPhoneNumber = useSelector(state => state.dialpad.enteredPhoneNumber);

    const setInputValue = value => dispatch(changePhoneNumber(value));

    const addInputValue = value => setInputValue(`${enteredPhoneNumber}${value}`);
    const onBackspace = () => setInputValue(enteredPhoneNumber.slice(0, -1));

    useEffect(() => {
        dispatch(changePhoneNumber(''))
    }, [])

    return (
        <div className="dialpad__keypad-page">
            <PhoneInput inputValue={enteredPhoneNumber} />
            <PhoneKeypad {...{ addInputValue, onBackspace, withDeclineKeypad: true }} />
        </div>
    );
};