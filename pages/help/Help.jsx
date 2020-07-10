import React from 'react';
import { AppUrls } from '../../common/AppUrls';
import { PageHeaderWithButtons } from '../../shared/components/PageHeaderWithButtons';
import { HelpConfig } from './config/HelpConfig';
import './Help.scss';

export const Help = () => (
    <>
        <PageHeaderWithButtons
            backUrl={AppUrls.settings}
            pageName='Help'
        />
        {
            HelpConfig.map(({ id, name, imgSrc }) => (
                <div key={id} className="help__item d-flex align-items-center">
                    <img src={imgSrc} alt="ico" className="help__item__img" />
                    <span>{name}</span>
                </div>
            ))
        }
    </>
);