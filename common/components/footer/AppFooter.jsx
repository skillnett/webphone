import React from 'react';
import { NavLink } from 'react-router-dom';
import { FooterConfig } from './config/FooterConfig';
import './AppFooter.scss';

export const AppFooter = () => (
    <div className="app__footer d-flex justify-content-center">
        {
            FooterConfig.map(({ url, name, id, ico, icoWidth }) => {
                const NavIcon = ico;
                return (
                    <NavLink
                        key={id}
                        to={url}
                        className="app__footer__item d-flex flex-column align-items-center justify-content-between"
                        activeClassName="app__footer__item--active"
                    >
                        <NavIcon className="app__footer__item-icon" style={{ width: icoWidth }} />
                        <span className="app__footer__item-name">{name}</span>
                    </NavLink>
                )
            })
        }
    </div>
);