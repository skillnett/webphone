import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeDealing } from '../../store/appReducers/call';
import { CallAvatar } from './components/CallAvatar';
import { CallInfo } from './components/CallInfo';
import { CallActions } from './components/CallActions';
import { CancelCallButton } from '../dialpad/components/CancelCallButton';
import { AppUrls } from '../../common/AppUrls';
import { IncomingCall } from './components/IncomingCall';
import { useParams } from 'react-router';
import './Call.scss';
import { CallPageTypes } from '../../common/enums';

export const Call = () => {

    const dispatch = useDispatch();
    const { slug } = useParams();
    const { dealing, phoneNumbers } = useSelector(state => state.call);

    const [isTimerActive, setIsTimerActive] = useState(false);
    const toggleTimerActive = () => setIsTimerActive(!isTimerActive);

    useEffect(() => {
        !dealing && toggleTimerActive();
        dealing && setTimeout(() => dispatch(changeDealing(false)), 1500);
    }, [dealing]);

    return (
        <div className="call d-flex flex-column align-items-center">
            <CallAvatar />
            <CallInfo {...{ dealing, phoneNumbers, isTimerActive }} />
            <CallActions {...{ dealing, setIsTimerActive, isTimerActive }} />
            <CancelCallButton navigateTo={AppUrls.dialpad} />
            {
                slug === CallPageTypes.IncomingCall && <IncomingCall />
            }
        </div>
    );
};