import React from 'react';
import { ReactComponent as KeypadHideIcon } from '../../../../public/images/dialpad/keypad-hide.svg';
import { useHistory } from 'react-router';

export const HideKeypadButton = () => {

    const history = useHistory();
    
    return (
        <button
            type="button"
            className="dialpad__keypad-page__hide-btn d-flex flex-column justify-content-center align-items-center"
            onClick={() => history.goBack()}
        >
            <KeypadHideIcon className="dialpad__keypad-page__hide-btn__ico" />
            hide
        </button>
    );
};