import React from 'react';
import { RecentsImageSources } from '../../recents/ImageSources';

export const CallAvatar = () => (
    <div className="call__avatar d-flex align-items-center justify-content-center">
        <img src={RecentsImageSources.userAvatarSrc} alt="avatar" className="call__avatar-img" />
    </div>
);