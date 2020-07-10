import React from 'react';
import { PageHeader } from '../PageHeader';
import './EmptyPageContent.scss';

export const EmptyPageContent = ({ pageTitle, bgImageSrc, messageLine1, messageLine2, imgSrc }) => (
    <div className="empty-page">
        <PageHeader pageName={pageTitle} />
        <div className="empty-page__wrapper">
            <div className="empty-page__empty-content d-flex justify-content-center" style={{ backgroundImage: `url(${bgImageSrc})` }}>
                <img src={imgSrc} alt="empty ico" />
            </div>
            <div className="empty-page__empty-msg">
                <p className="empty-page__empty-msg__text">{messageLine1}</p>
                {
                    messageLine2 &&
                    <p className="empty-page__empty-msg__text">{messageLine2}</p>
                }
            </div>
        </div>
    </div>
);