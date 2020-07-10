import React from 'react';
import Modal from 'react-modal';
import { modalStyles } from './ModalStylesObj';

export const ModalAsDropdown = ({ isModalVisible, toggleModal, modalContent, customModalStyles }) => (
    <Modal
        isOpen={isModalVisible}
        onRequestClose={toggleModal}
        closeTimeoutMS={300}
        style={customModalStyles || modalStyles}
        ariaHideApp={false}
    >
        {modalContent()}
    </Modal>
);