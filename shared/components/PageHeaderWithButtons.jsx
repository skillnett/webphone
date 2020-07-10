import React from 'react';
import { SharedImageSources } from '../ImageSources';
import { useHistory } from "react-router-dom";
import { ReactComponent as KeypadIcon } from '../../../public/images/dialpad/keypad.svg';
import { AppUrls } from '../../common/AppUrls';

export const PageHeaderWithButtons = ({ pageName, backUrl, withKeypadBtn }) => {

    const history = useHistory();

    return (
        <div className="app__page-header d-flex justify-content-center">
            <button
                type="button"
                onClick={() => backUrl ? history.push(backUrl) : history.goBack()}
                className="app__page-header__back"
            >
                <img src={SharedImageSources.backSrc} alt="back" />
            </button>
            {pageName}
            {
                withKeypadBtn &&
                <button
                    type="button"
                    onClick={() => history.push(AppUrls.keypad)}
                    className="app__page-header__back app__page-header__keypad"
                >
                    <KeypadIcon className="app__page-header__keypad-ico" />
                </button>
            }
        </div>
    )
}