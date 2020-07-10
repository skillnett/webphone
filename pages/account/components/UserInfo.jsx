import React from 'react';
import { useSelector } from 'react-redux';

export const UserInfo = () => {

    const { userName, userLastName, avatar } = useSelector(state => state.profile);

    return (
        <div className="account__user-info d-flex flex-column align-items-center">
            <img src={avatar} alt="avatar" />
            <span className="account__user-info__profile-name">{userName} {userLastName}</span>
            <button type="button" className="account__user-info__profile-btn">Profile</button>
        </div>
    );
};