import React from 'react';
import { HeaderImageSources } from './ImageSources';
import { useSelector } from 'react-redux';
import { ModeTypes } from '../../../common/enums';

export const AppMode = () => {

    const mode = useSelector(state => state.profile.mode);
    const isAvailableMode = mode === ModeTypes.Available;

    return (
        <div className="d-flex align-items-center">
            <img src={isAvailableMode ? HeaderImageSources.availableSrc : HeaderImageSources.notDisturbSrc} alt="status" className="app__header__img-mode" />
            <span className="app__header__text-mode">{isAvailableMode ? 'Available' : 'Do not disturb'}</span>
        </div>
    );
};