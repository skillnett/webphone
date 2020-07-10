import React, { useState } from 'react';
import { PageHeader } from '../../../shared/components/PageHeader';
import { WebphoneModal } from '../../../shared/components/modal/WebphoneModal';
import { useParams } from 'react-router';
import { ContactsPageTypes } from '../../../common/enums';
import { PageHeaderWithButtons } from '../../../shared/components/PageHeaderWithButtons';

export const ContactsList = ({ contactsList }) => {

    const [contactDetails, setContactDetails] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => setModalVisible(!isModalVisible);

    const handleOnContactClick = (phoneNumber, userAvatar, userName, bgColor, textColor) => {
        toggleModal();
        setContactDetails({ phoneNumber, userAvatar, userName, bgColor, textColor });
    }

    const modalData = {
        imgSrc: contactDetails?.userAvatar,
        text: contactDetails?.userName,
        buttonText: 'Call now',
        customContent: () => renderPhoneColorBlock(contactDetails?.bgColor, contactDetails?.textColor, contactDetails?.phoneNumber)
    }

    const renderPhoneColorBlock = (bgColor, textColor, phoneNumber) => (
        <div className="contacts__item__number-wrp">
            <span
                className="contacts__item__number"
                style={{ color: textColor, backgroundColor: bgColor }}
            >
                {phoneNumber}
            </span>
        </div>
    )

    const { slug } = useParams();

    return (
        <div className="contacts">
            {
                slug === ContactsPageTypes.AllContacts ?
                    <PageHeader pageName='Contacts' /> :
                    <PageHeaderWithButtons
                        pageName={slug === ContactsPageTypes.TransferCall ? 'Transfer call' : 'Add call'}
                        withKeypadBtn
                    />
            }
            {
                contactsList.map(({ id, phoneNumber, userAvatar, userName, bgColor, textColor }) => (
                    <div
                        key={id}
                        className="contacts__item d-flex align-items-center"
                        onClick={() => handleOnContactClick(phoneNumber, userAvatar, userName, bgColor, textColor)}
                    >
                        {renderPhoneColorBlock(bgColor, textColor, phoneNumber)}
                        <span className="contacts__item__name">{userName}</span>
                    </div>
                ))
            }
            <WebphoneModal {...{ isModalVisible, toggleModal, modalData, slug }} />
        </div>
    );
};