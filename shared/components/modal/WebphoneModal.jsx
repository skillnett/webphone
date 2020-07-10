import React from 'react';
import Modal from 'react-modal';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { modalStyles } from './ModalStylesObj';
import { SharedImageSources } from '../../ImageSources';
import { useHistory } from 'react-router';
import { UrlsProvider } from '../../../utils/urlUtils';
import { CallPageTypes, ContactsPageTypes } from '../../../common/enums';
import { AppUrls } from '../../../common/AppUrls';
import { addCallNumber } from '../../../store/appReducers/call';
import './WebphoneModal.scss';

export const WebphoneModal = ({ isModalVisible, toggleModal, modalData, slug }) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const onNavigate = slug => history.push(UrlsProvider.callUrlGenerator(slug));

    const handleCallClick = () => {
        if (!slug || slug === ContactsPageTypes.AllContacts) {
            onNavigate(CallPageTypes.Single)
        } else {
            slug === ContactsPageTypes.AddContact ? addNumberAndNavigate() : history.push(AppUrls.dialpad)
        }
    }

    const addNumberAndNavigate = () => {
        onNavigate(CallPageTypes.Pair);
        dispatch(addCallNumber());
    }

    const isTransferCall = slug === ContactsPageTypes.TransferCall;

    return (
        <Modal
            isOpen={isModalVisible}
            onRequestClose={toggleModal}
            closeTimeoutMS={300}
            style={modalStyles}
            ariaHideApp={false}
        >
            <div className="webphone-modal d-flex flex-column align-items-center">
                <button type="button" className="webphone-modal__close" onClick={toggleModal}>
                    <img src={SharedImageSources.closeSrc} alt="close" className="webphone-modal__close-img" />
                </button>

                <img src={modalData.imgSrc} alt="avatar" className="webphone-modal__avatar" />
                {
                    modalData.customContent &&
                    <div className="d-flex justify-content-center mb-2">
                        {modalData.customContent()}
                    </div>
                }
                <div className="webphone-modal__text-wrapper">
                    {isTransferCall && <span className="webphone-modal__text">Are you sure transfer <br /> call to</span>}
                    <span className={cn("webphone-modal__text", isTransferCall && "webphone-modal__text--bold")}>{modalData.text}</span>
                    {isTransferCall && <span className="webphone-modal__text">?</span>}
                </div>

                <button
                    type="button"
                    className="webphone-modal__action-btn d-flex"
                    onClick={handleCallClick}
                >
                    <img src={SharedImageSources.handsetSrc} alt="phone" className="webphone-modal__action-btn-img" />
                    {isTransferCall ? 'Transfer now' : modalData.buttonText}
                </button>
            </div>
        </Modal>
    );
}