import React from 'react';
import { useSelector } from 'react-redux';
import { RecentCalls } from './components/RecentCalls';
import { RecentsImageSources } from './ImageSources';
import { EmptyPageContent } from '../../shared/components/emptyPageContent/EmptyPageContent';
import './Recents.scss';

export const Recents = () => {

    const recentCalls = useSelector(state => state.recents.recentCalls);
    const hasRecentCalls = !!recentCalls.length;

    return hasRecentCalls ?
        <RecentCalls {...{ recentCalls }} /> :
        <EmptyPageContent
            pageTitle='Recents'
            imgSrc={RecentsImageSources.emptyRecentsSrc}
            messageLine1='You don’t have any recent calls.'
            messageLine2='Make first call!'
            bgImageSrc={RecentsImageSources.emptyRecentsBgSrc}
        />
};