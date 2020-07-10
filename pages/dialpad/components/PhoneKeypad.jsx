import React from 'react';
import { KeypadButton } from './KeypadButton';
import { CallButton } from './CallButton';
import { BackspaceButton } from './BackspaceButton';
import { CancelCallButton } from './CancelCallButton';
import { AppUrls } from '../../../common/AppUrls';
import { HideKeypadButton } from './HideKeypadButton';

export const PhoneKeypad = ({ addInputValue, onBackspace, withDeclineKeypad }) => (
    <div className="dialpad__keypad">
        <div className="d-flex justify-content-between">
            <KeypadButton
                setInputValue={addInputValue}
                number={1}
            />
            <KeypadButton
                setInputValue={addInputValue}
                number={2}
                letters='ABC'
            />
            <KeypadButton
                setInputValue={addInputValue}
                number={3}
                letters='DEF'
            />
        </div>
        <div className="d-flex justify-content-between">
            <KeypadButton
                setInputValue={addInputValue}
                number={4}
                letters='GHI'
            />
            <KeypadButton
                setInputValue={addInputValue}
                number={5}
                letters='JKL'
            />
            <KeypadButton
                setInputValue={addInputValue}
                number={6}
                letters='MNO'
            />
        </div>
        <div className="d-flex justify-content-between">
            <KeypadButton
                setInputValue={addInputValue}
                number={7}
                letters='PQRS'
            />
            <KeypadButton
                setInputValue={addInputValue}
                number={8}
                letters='TUV'
            />
            <KeypadButton
                setInputValue={addInputValue}
                number={9}
                letters='WXYZ'
            />
        </div>
        <div className="d-flex justify-content-between">
            <KeypadButton
                setInputValue={addInputValue}
                number='*'
                centered
            />
            <KeypadButton
                setInputValue={addInputValue}
                number={0}
                letters='+'
            />
            <KeypadButton
                setInputValue={addInputValue}
                number='#'
                centered
            />
        </div>

        <div className="d-flex justify-content-end">
            <div className="dialpad__keypad__footer-wrp d-flex justify-content-between">
                {
                    withDeclineKeypad ?
                        <>
                            <CancelCallButton navigateTo={AppUrls.dialpad} />
                            <HideKeypadButton />
                        </> :
                        <>
                            <CallButton />
                            <BackspaceButton {...{ onBackspace }} />
                        </>
                }
            </div>
        </div>
    </div>
);