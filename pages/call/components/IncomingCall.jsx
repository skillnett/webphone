import React from 'react';
import { CancelCallButton } from '../../dialpad/components/CancelCallButton';
import { CallButton } from '../../dialpad/components/CallButton';
import { CallPageTypes } from '../../../common/enums';
import { UrlsProvider } from '../../../utils/urlUtils';
import { useHistory } from 'react-router';
import { addCallNumber } from '../../../store/appReducers/call';
import { useDispatch } from 'react-redux';

export const IncomingCall = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const buttonsProps = {
        width: '40px',
        height: '40px',
        imgHeight: '19px',
        radius: '10px'
    }

    const addNumberAndNavigate = () => {
        history.push(UrlsProvider.callUrlGenerator(CallPageTypes.Pair));
        dispatch(addCallNumber());
    }

    return (
        <div className="call__incoming d-flex justify-content-between align-items-center">
            <CancelCallButton
                {...buttonsProps}
                imgHeight='9px'
                navigateTo={UrlsProvider.callUrlGenerator(CallPageTypes.Single)}
            />
            <div className="call__incoming__number-wrp">
                <div className="call__incoming__number">
                    +972 765 432 10
                </div>
            </div>
            <CallButton
                {...buttonsProps}
                action={addNumberAndNavigate}
            />
        </div>
    );
};