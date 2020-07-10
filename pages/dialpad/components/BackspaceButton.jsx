import React from 'react';
import { SharedImageSources } from '../../../shared/ImageSources';

export const BackspaceButton = ({ onBackspace }) => (
    <button
        type="button"
        onClick={onBackspace}
    >
        <img src={SharedImageSources.backspaceSrc} alt="remove" className="dialpad__backspace-img" />
    </button>
);