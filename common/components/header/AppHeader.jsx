import React from 'react';
import './AppHeader.scss';
import { AppMode } from './AppMode';
import { Speakers } from './Speakers';

export const AppHeader = () => (
    <div className="app__header d-flex justify-content-between align-items-center">
        <AppMode />
        <Speakers />
    </div>
)