import React, { useState, useRef } from 'react';
import { AppUrls } from '../../common/AppUrls';
import { PageHeaderWithButtons } from '../../shared/components/PageHeaderWithButtons';
import { SettingBlock } from './components/SettingBlock';
import { SettingsImageSources } from '../settings/ImageSources';
import { ModalAsDropdown } from '../../shared/components/modalAsDropdown/ModalAsDropdown';
import { ModalStyles } from './config/ModalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { onDeviceConfigChange } from '../../store/appReducers/profile';
import { VolumeMeter } from './components/VolumeMeter';
import { RingtonePlayer } from './components/RingtonePlayer';
import './SoundAndDevices.scss';

export const SoundAndDevices = () => {

    const soundRef = useRef(null);
    const microphoneRef = useRef(null);
    const speakersRef = useRef(null);

    const dispatch = useDispatch();

    const defaultDropdownImgClassName = 'sound-and-devices__item-btn__img';
    const activeClassName = `${defaultDropdownImgClassName}--active`;

    const [modalStyles, setModalStyles] = useState(ModalStyles);
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const { soundNotificationConfig, speakersConfig, microphoneConfig } = useSelector(state => state.profile);

    const toggleModal = (event, ref, config, configName) => {
        if (event) {
            const viewPortWidth = window.innerWidth;
            const { y } = event.target.getBoundingClientRect();

            setModalStyles({
                ...modalStyles,
                content: {
                    ...modalStyles.content,
                    top: `${y + 25}px`,
                    left: `${viewPortWidth / 2}px`
                }
            })
        }
        if (ref) {
            classListActionProvider(ref, 'add');
        } else {
            [soundRef, microphoneRef, speakersRef].forEach(ref => (
                classListActionProvider(ref, 'contains') &&
                classListActionProvider(ref, 'remove')
            ))
        }

        setModalContent(renderModalContent(config, configName));
        setModalVisible(!isModalVisible);
    }

    const classListActionProvider = (ref, action) => ref.current.children[0].classList[action](activeClassName);

    const renderModalContent = (modalConfig, configName) => (
        modalConfig ? modalConfig.map(({ id, name, isSelected }) => (
            <div
                key={id}
                className="sound-and-devices__dropdown-item d-flex justify-content-between align-items-center"
                onClick={() => onDropdownSelect(id, configName)}
            >
                <span className="sound-and-devices__dropdown-item__text">{name}</span>
                {
                    isSelected &&
                    <img src={SettingsImageSources.tickBlueSrc} alt="arrow" className="sound-and-devices__dropdown-item__img" />
                }
            </div>
        )) : []
    )

    const onDropdownSelect = (id, configName) => {
        dispatch(onDeviceConfigChange(id, configName));
        toggleModal();
        setModalVisible(false);
        startRingtone();
    }

    const selectedRingtone = soundNotificationConfig.find(({ isSelected }) => isSelected).name;

    const [ringtonePercent, setRingtonePercent] = useState(0);
    const [isPlayerActive, setPlayerActive] = useState(false);

    const startRingtone = () => {
        setRingtonePercent(100);
        setPlayerActive(true);
    };

    const closePlayer = () => setPlayerActive(false);

    return (
        <>
            <PageHeaderWithButtons
                backUrl={AppUrls.settings}
                pageName='Sound & Devices'
            />
            <SettingBlock
                title='Sound notifications'
                fieldImageSrc={SettingsImageSources.ringtoneSrc}
                fieldText='Ringtone'
                buttonRef={soundRef}
                config={soundNotificationConfig}
                configName='soundNotificationConfig'
                toggleModal={toggleModal}
            />
            <SettingBlock
                title='Speakers'
                fieldImageSrc={SettingsImageSources.speakersSrc}
                fieldText='Output'
                buttonRef={speakersRef}
                config={speakersConfig}
                configName='speakersConfig'
                toggleModal={toggleModal}
            />
            <SettingBlock
                title='Microphone'
                fieldImageSrc={SettingsImageSources.microphoneSrc}
                fieldText='Microphone'
                buttonRef={microphoneRef}
                config={microphoneConfig}
                configName='microphoneConfig'
                toggleModal={toggleModal}
            >
                <VolumeMeter />
            </SettingBlock>

            {
                isPlayerActive &&
                <RingtonePlayer
                    ringtoneName={selectedRingtone}
                    progressPercent={ringtonePercent}
                    setRingtonePercent={setRingtonePercent}
                    isPlayerActive={isPlayerActive}
                    closePlayer={closePlayer}
                />
            }

            <ModalAsDropdown
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
                modalContent={() => modalContent}
                customModalStyles={modalStyles}
            />
        </>
    );
};