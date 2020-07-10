import React from 'react';
import { PageHeaderWithButtons } from '../../shared/components/PageHeaderWithButtons';
import { AppUrls } from '../../common/AppUrls';
import { UserInfo } from './components/UserInfo';
import { UserNumbers } from './components/UserNumbers';
import './Account.scss';

export const Account = () => (
    <>
        <PageHeaderWithButtons
            backUrl={AppUrls.settings}
            pageName='Account'
        />
        <UserInfo />
        <UserNumbers />
    </>
);