import React from 'react';
import { useSelector } from 'react-redux';
import { SettingsImageSources } from '../../settings/ImageSources';

export const UserNumbers = () => {

    const userNumbers = useSelector(state => state.profile.userNumbers);

    return (
        <div className="account__numbers">
            <span className="account__numbers__title">Numbers</span>
            {
                !!userNumbers.length && userNumbers.map(({ id, number }) => (
                    <div key={id} className="account__numbers__item d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={SettingsImageSources.phoneSrc} alt="phone" className="account__numbers__item-img" />
                            <span>{number}</span>
                        </div>
                        <button type="button" className="account__user-info__profile-btn">Manage</button>
                    </div>
                ))
            }
        </div>
    );
};