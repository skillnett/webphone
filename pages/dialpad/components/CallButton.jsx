import React from 'react';
import { SharedImageSources } from '../../../shared/ImageSources';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setCallNumber } from '../../../store/appReducers/call';
import { UrlsProvider } from '../../../utils/urlUtils';
import { CallPageTypes } from '../../../common/enums';

export const CallButton = ({ width = '60px', height = '60px', imgHeight = '28px', radius = '16px', action }) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const enteredPhoneNumber = useSelector(state => state.dialpad.enteredPhoneNumber);

    const onCall = () => {
        dispatch(setCallNumber(enteredPhoneNumber));
        history.push(UrlsProvider.callUrlGenerator(CallPageTypes.Single));
    };

    return (
        <button
            type="button"
            className="dialpad__call-btn d-flex justify-content-center align-items-center"
            style={{ width, height, borderRadius: radius }}
            onClick={action || onCall}
        >
            <img src={SharedImageSources.handsetSrc} alt="phone" style={{ height: imgHeight }} />
        </button >
    )
}