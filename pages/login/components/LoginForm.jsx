import React from 'react';
import { Input } from 'antd';
import { LoginImageSrc } from '../ImageSources';
import { useHistory } from 'react-router';
import { AppUrls } from '../../../common/AppUrls';

export const LoginForm = () => {

    const history = useHistory();

    return (
        <div className="login__form">
            <Input
                className="app__input"
                placeholder="E-mail address"
                prefix={<img src={LoginImageSrc.userImgSrc} alt="user ico" className="app__input__ico" />}
            />
            <Input
                className="app__input"
                placeholder="Password"
                prefix={<img src={LoginImageSrc.passwordImgSrc} alt="password ico" className="app__input__ico" />}
            />
            <button
                type="button"
                className="login__submit"
                onClick={() => history.push(AppUrls.recents)}
            >
                <img src={LoginImageSrc.confirmImgSrc} alt="submit ico" className="login__submit__img" /> Login
        </button>
            <div className="d-flex justify-content-center">
                <button type="button" className="login__forget-pass">I forget password</button>
            </div>
        </div>
    );
}