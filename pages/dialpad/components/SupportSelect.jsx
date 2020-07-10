import React from 'react';
import { SettingsImageSources } from '../../settings/ImageSources';

export const SupportSelect = ({ toggleModal, selectedSupport }) => (
    <div
        onClick={toggleModal}
        className="dialpad__select d-flex justify-content-between"
    >
        <div className="dialpad__select__support d-flex align-items-center">
            <img src={selectedSupport.imgSrc} alt="mode" className="dialpad__select__support-ico" />
            <div className="d-flex flex-column">
                <span className="dialpad__select__support-text">{selectedSupport.name}</span>
                <span className="dialpad__select__support-text">{selectedSupport.number}</span>
            </div>
        </div>
        <img src={SettingsImageSources.arrowDown} alt="arrow" className="settings__select__ico" />
    </div>
);