import React from 'react';
import { LoginImageSrc } from '../ImageSources';

export const Logotypes = () => (
    <div className="login__logotypes mb-3">
        <img src={LoginImageSrc.logoImgSrc} alt="logo" />
        <img src={LoginImageSrc.girlImgSrc} alt="girl" className="login__logotypes--girl" />
    </div>
);