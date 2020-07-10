import React, { useRef, useEffect } from 'react';
import { AppLayout } from './AppLayout';
import { Route } from 'react-router';
import SimpleBar from 'simplebar-react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

export const WebPhoneRoute = ({ path, component, withoutLayout = false, withoutFooter = false }) => {
    const TagName = component;
    const ContainerTag = isMobile ? 'div' : SimpleBar;
    const containerRef = useRef(null);

    useEffect(() => {
        sessionStorage.setItem('appHeight', containerRef.current.getBoundingClientRect().height);
    }, []);

    return (
        <Route
            path={path}
            render={props => (
                <div
                    ref={containerRef}
                    className={cn(isMobile ? "app__container--mobile" : "app__container")}
                >
                    <ContainerTag className={cn(isMobile ? "app__mobile-container" : "app__web-container")}>
                        <AppLayout {...{ withoutLayout, withoutFooter }}>
                            <TagName {...props} />
                        </AppLayout>
                    </ContainerTag>
                </div>
            )}
        />
    )
}