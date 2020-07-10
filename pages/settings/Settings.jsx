import React, { useState } from 'react';
import { PageHeader } from '../../shared/components/PageHeader';
import { SettingsConfig } from './config/SettingsConfig';
import { ModeSelect } from './components/ModeSelect';
import { ModalAsDropdown } from '../../shared/components/modalAsDropdown/ModalAsDropdown';
import { ModeDropdownConfig } from './config/ModeDropdownConfig';
import { useSelector, useDispatch } from 'react-redux';
import { SettingsImageSources } from './ImageSources';
import { changeMode } from '../../store/appReducers/profile';
import { modalStyles as ModalStyles } from '../../shared/components/modalAsDropdown/ModalStylesObj';
import './Settings.scss';

export const Settings = ({ history }) => {

    const dispatch = useDispatch();

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalStyles, setModalStyles] = useState(ModalStyles);

    const toggleModal = () => {
        const appContainerHeight = +sessionStorage.getItem('appHeight');;
        const windowHeight = window.innerHeight;
        const bottomRetreat = (windowHeight - appContainerHeight) / 2;

        setModalStyles({
            ...modalStyles,
            content: {
                ...modalStyles.content,
                bottom: `${bottomRetreat + 24}px`,
            }
        });

        setModalVisible(!isModalVisible)
    };

    const selectedMode = useSelector(state => state.profile.mode);

    const onModeSelect = (modeId) => {
        dispatch(changeMode(modeId));
        toggleModal();
    };

    const modalContent = () => ModeDropdownConfig.map(({ id, text, imgSrc }) => (
        <div
            key={id}
            className="settings__select__item d-flex align-items-center justify-content-between"
            onClick={() => onModeSelect(id)}
        >
            <div className="settings__select__status d-flex align-items-center">
                <img src={imgSrc} alt="mode" className="settings__select__status-ico" />
                {text}
            </div>
            {
                id === selectedMode &&
                <img src={SettingsImageSources.checkBlueSrc} alt="arrow" className="settings__select__ico" />
            }
        </div>
    ));

    return (
        <div className="settings d-flex flex-column flex-fill">
            <PageHeader pageName='Settings' />
            {
                SettingsConfig.map(({ id, ico, name, url }) => (
                    <div
                        key={id}
                        className="settings__nav-item d-flex align-items-center"
                        onClick={() => history.push(url)}
                    >
                        <img src={ico} alt="nav icon" className="settings__nav-item__ico" />
                        {name}
                    </div>
                ))
            }
            <ModeSelect {...{ toggleModal }} />
            <ModalAsDropdown {...{ isModalVisible, toggleModal, modalContent, customModalStyles: modalStyles }} />
        </div>
    )
}