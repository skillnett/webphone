import React from 'react';
import { SettingsImageSources } from '../../settings/ImageSources';

export const SettingBlock = ({ title, children, fieldImageSrc, fieldText, buttonRef, config, configName, toggleModal }) => (
    <div className="sound-and-devices">
        <span className="sound-and-devices__title">{title}</span>
        <div className="sound-and-devices__item">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={fieldImageSrc} alt="setting" className="sound-and-devices__item-img" />
                    <span>{fieldText}</span>
                </div>
                <button
                    type="button"
                    ref={buttonRef}
                    className="sound-and-devices__item-btn d-flex align-items-center"
                    onClick={e => toggleModal(e, buttonRef, config, configName)}
                >
                    {config.find(({ isSelected }) => isSelected).name} <img src={SettingsImageSources.arrowDown} alt="arrow" className="sound-and-devices__item-btn__img" />
                </button>
            </div>
            {children}
        </div>
    </div>
);