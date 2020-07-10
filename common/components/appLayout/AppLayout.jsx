import React from 'react';
import { AppHeader } from '../header/AppHeader';
import { AppFooter } from '../footer/AppFooter';

export const AppLayout = ({ children, withoutLayout, withoutFooter }) => {
    if (withoutLayout) {
        return children;
    }
    return (
        <>
            <AppHeader />
            <div className="flex-fill d-flex flex-column">
                {children}
            </div>
            {!withoutFooter && <AppFooter />}
        </>
    )
}