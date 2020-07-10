import React from 'react';
import { SharedImageSources } from '../../../shared/ImageSources';
import { Progress } from 'antd';
import { useEffect } from 'react';

export const RingtonePlayer = ({ ringtoneName, progressPercent, setRingtonePercent, closePlayer, isPlayerActive }) => {

    useEffect(() => {
        let timerId;
        if (isPlayerActive) {
            timerId = setTimeout(() => setRingtonePercent(progressPercent - 1), 40);
            progressPercent === 0 && closePlayer();
        } else {
            clearTimeout(timerId);
        }
    }, [progressPercent])

    const getPlayingRingtoneText = () => <span className="sound-and-devices__player__text">You’re listening <b>{ringtoneName}</b> now</span>

    return (
        <div className="sound-and-devices__player-wrapper">
            <div className="sound-and-devices__player d-flex align-items-center">
                <div className="sound-and-devices__player__content d-flex justify-content-between flex-fill">
                    {getPlayingRingtoneText()}
                    <button
                        type="button"
                        className="sound-and-devices__player__btn"
                        onClick={closePlayer}
                    >
                        <img src={SharedImageSources.closeSrc} alt="close ico" className="sound-and-devices__ico" />
                    </button>
                </div>
                <Progress
                    percent={progressPercent}
                    showInfo={false}
                    className="sound-and-devices__player__progress"
                    strokeColor="#238cf5"
                    trailColor="transparent"
                    strokeWidth={6}
                />
            </div>
        </div>
    );
}