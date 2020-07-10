import React, { useState } from 'react';
import { VolumePicker } from './VolumePicker';
import { ReactComponent as SpeakersIcon } from '../../../../public/images/shared/sound.svg';
import cn from 'classnames';

export const Speakers = () => {

    const [isVolumePickerShown, setVolumePickerShown] = useState(false);

    return (
        <div className="app__header__img-speakers__wrapper">
            <button type="button" onClick={() => setVolumePickerShown(!isVolumePickerShown)}>
                <SpeakersIcon className={cn("app__header__img-speakers", isVolumePickerShown && "app__header__img-speakers--active")} />
            </button>
            {
                isVolumePickerShown &&
                <div className="app__header__vol-picker__wrapper d-flex flex-column align-items-center">
                    <VolumePicker />
                </div>
            }
        </div>
    );
};