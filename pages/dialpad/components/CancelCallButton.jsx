import React from 'react';
import { SharedImageSources } from '../../../shared/ImageSources';
import { useHistory } from "react-router-dom";

export const CancelCallButton = ({ navigateTo, width = '60px', height = '60px', imgHeight = '13px', radius = '16px' }) => {

    const history = useHistory();
    const onCancelCall = () => history.push(navigateTo);

    return (
        <button
            type="button"
            className="dialpad__cancel-call-btn d-flex justify-content-center align-items-center"
            style={{ width, height, borderRadius: radius }}
            onClick={onCancelCall}
        >
            <img src={SharedImageSources.declineSrc} alt="phone" style={{ height: imgHeight }} />
        </button >
    )
}