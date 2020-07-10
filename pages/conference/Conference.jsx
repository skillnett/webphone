import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SharedImageSources } from '../../shared/ImageSources';
import { PageHeaderWithButtons } from '../../shared/components/PageHeaderWithButtons';
import { endCall, setPrivateCall } from '../../store/appReducers/call';
import { useHistory } from 'react-router';
import { UrlsProvider } from '../../utils/urlUtils';
import { CallPageTypes } from '../../common/enums';
import './Conference.scss';

export const Conference = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const phoneNumbers = useSelector(state => state.call.phoneNumbers);

    const onNavigate = slug => history.push(UrlsProvider.callUrlGenerator(slug));

    const onDeclineClick = id => {
        dispatch(endCall(id));
        onNavigate(CallPageTypes.Merged);
    }

    const onPrivateClick = id => {
        dispatch(setPrivateCall(id));
        onNavigate(CallPageTypes.Pair);
    }

    return (
        <>
            <PageHeaderWithButtons pageName='Conference' />
            <div className="conference">
                {
                    phoneNumbers.map(({ id, number }) => (
                        <div key={id} className="conference__item d-flex align-items-center">
                            <span className="conference__item__phone">{number}</span>
                            <div className="d-flex align-items-center ml-auto">
                                <button
                                    type="button"
                                    className="conference__item__decline-btn d-flex justify-content-center align-items-center"
                                    onClick={() => onDeclineClick(id)}
                                >
                                    <img
                                        src={SharedImageSources.declineSrc}
                                        alt="phone"
                                        className="conference__item__decline-btn__img"
                                    />
                                </button>
                                <button
                                    type="button"
                                    className="conference__item__private-btn d-flex align-items-center justify-content-center"
                                    onClick={() => onPrivateClick(id)}
                                >
                                    Private
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};