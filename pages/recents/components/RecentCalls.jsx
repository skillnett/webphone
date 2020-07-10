import React, { useState } from 'react';
import { PageHeader } from '../../../shared/components/PageHeader';
import { CallTypes } from '../../../common/enums';
import { RecentsImageSources } from '../ImageSources';
import { WebphoneModal } from '../../../shared/components/modal/WebphoneModal';

export const RecentCalls = ({ recentCalls }) => {

    const [contactDetails, setContactDetails] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!isModalVisible);

    const handleOnContactClick = (phoneNumber, userAvatar) => {
        toggleModal();
        setContactDetails({ phoneNumber, userAvatar });
    }

    const modalData = {
        imgSrc: contactDetails?.userAvatar,
        text: contactDetails?.phoneNumber,
        buttonText: 'Call now'
    }

    return (
        <div className="recents">
            <PageHeader pageName='Recents' />
            {
                recentCalls.map(({ id, phoneNumber, callType, callDate, userAvatar }) => {
                    const callIconSrc = callType === CallTypes.Incoming ? RecentsImageSources.incomingSrc : RecentsImageSources.outgoingSrc;
                    return (
                        <div
                            key={id}
                            className="recents__item d-flex justify-content-between align-items-center"
                            onClick={() => handleOnContactClick(phoneNumber, userAvatar)}
                        >
                            <div className="d-flex flex-fill align-items-center">
                                <img src={callIconSrc} alt="call type" className="recents__item__ico" />
                                <span>{phoneNumber}</span>
                            </div>
                            <span className="recents__item__date">{callDate}</span>
                        </div>
                    )
                })
            }
            <WebphoneModal {...{ isModalVisible, toggleModal, modalData }} />
        </div>
    )
};