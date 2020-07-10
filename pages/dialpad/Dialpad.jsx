import React, { useState } from 'react';
import { PhoneInput } from './components/PhoneInput';
import { PhoneKeypad } from './components/PhoneKeypad';
import { SettingsImageSources } from '../settings/ImageSources';
import { ModalAsDropdown } from '../../shared/components/modalAsDropdown/ModalAsDropdown';
import { SupportSelect } from './components/SupportSelect';
import { DialpadDropdownConfig } from './config/DialpadDropdownConfig';
import { useDispatch, useSelector } from 'react-redux';
import { changePhoneNumber } from '../../store/appReducers/dialpad';
import { modalStyles as ModalStyles } from '../../shared/components/modalAsDropdown/ModalStylesObj';
import './Dialpad.scss';

export const Dialpad = () => {

    const dispatch = useDispatch();
    const enteredPhoneNumber = useSelector(state => state.dialpad.enteredPhoneNumber);

    const setInputValue = value => dispatch(changePhoneNumber(value));

    const addInputValue = value => setInputValue(`${enteredPhoneNumber}${value}`);
    const onBackspace = () => setInputValue(enteredPhoneNumber.slice(0, -1));

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

    const [selectedSupport, setSelectedSupport] = useState(DialpadDropdownConfig[0]);
    const selectSupport = supportConfig => {
        setSelectedSupport(supportConfig);
        toggleModal();
    }

    const modalContent = () => DialpadDropdownConfig.map(config => (
        <div
            key={config.id}
            className="settings__select__item d-flex align-items-center justify-content-between"
            onClick={() => selectSupport(config)}
        >
            <div className="settings__select__status d-flex align-items-center">
                <img src={config.imgSrc} alt="mode" className="settings__select__status-ico" />
                <div className="d-flex flex-column">
                    <span>{config.name}</span>
                    <span>{config.number}</span>
                </div>
            </div>
            {
                selectedSupport.id === config.id &&
                <img src={SettingsImageSources.checkBlueSrc} alt="arrow" className="settings__select__ico" />
            }
        </div>
    ));

    return (
        <div>
            <PhoneInput inputValue={enteredPhoneNumber} />
            <PhoneKeypad {...{ addInputValue, onBackspace }} />
            <SupportSelect {...{ toggleModal, selectedSupport }} />
            <ModalAsDropdown {...{ isModalVisible, toggleModal, modalContent, customModalStyles: modalStyles }} />
        </div>
    );
};