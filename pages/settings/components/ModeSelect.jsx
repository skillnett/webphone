import React from 'react';
import { HeaderImageSources } from '../../../common/components/header/ImageSources';
import { SettingsImageSources } from '../ImageSources';
import { useSelector } from 'react-redux';
import { ModeTypes } from '../../../common/enums';

export const ModeSelect = ({ toggleModal }) => {

    const mode = useSelector(state => state.profile.mode);
    const isAvailableMode = mode === ModeTypes.Available;

    return (
        <div
            onClick={toggleModal}
            className="settings__select d-flex justify-content-between"
        >
            <div className="settings__select__status d-flex align-items-center">
                <img src={isAvailableMode ? HeaderImageSources.availableSrc : HeaderImageSources.notDisturbSrc} alt="mode" className="settings__select__status-ico" />
                {isAvailableMode ? 'Available' : 'Do not disturb'}
            </div>
            <img src={SettingsImageSources.arrowDown} alt="arrow" className="settings__select__ico" />
        </div>
    );
};