import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { getNumbersString } from '../../../utils/loopUtils';
import { useParams, useHistory } from 'react-router';
import { CallPageTypes } from '../../../common/enums';
import { SharedImageSources } from '../../../shared/ImageSources';
import { AppUrls } from '../../../common/AppUrls';

export const CallInfo = ({ dealing, phoneNumbers, isTimerActive }) => {

    const { slug } = useParams();
    const history = useHistory();
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isTimerActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000)
        } else if (!isTimerActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isTimerActive, seconds]);

    const format = time => {
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);

        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;

        return minutes + ':' + seconds
    }

    const activatedNumbers = phoneNumbers.filter(({ isActive }) => isActive);
    const deactivatedNumbers = phoneNumbers.filter(({ isActive }) => !isActive);

    const isMerged = slug === CallPageTypes.Merged;

    return (
        <div className={cn("call__info-wrapper d-flex flex-column align-items-center w-100", isMerged ? "pl-4 pr-4" : "pl-5 pr-5")}>
            {
                isMerged &&
                <button
                    type="button"
                    className="d-flex align-items-center call__info"
                    onClick={() => history.push(AppUrls.conference)}
                >
                    <img src={SharedImageSources.infoSrc} alt="info" className="call__info__img" />
                    info
                </button>
            }
            {
                phoneNumbers.length === 1 || isMerged ?
                    <>
                        <span className={cn("call__phone-number overflow-ellipsis", isMerged && "call__phone-number--merged")}>
                            {isMerged ? getNumbersString(phoneNumbers) : phoneNumbers[0].number}
                        </span>
                        <span className={cn("call__dealing", !dealing && "call__dealing-timer")}>{dealing ? 'Dealing...' : format(seconds)}</span>
                    </> :
                    <>
                        <div className="d-flex justify-content-between call--hold w-100">
                            <span className="call__phone-status overflow-ellipsis">{getNumbersString(deactivatedNumbers)}</span>
                            <span className="call__phone-status call__phone-status--hold">Hold</span>
                        </div>
                        <div className="d-flex justify-content-between w-100">
                            <span className="call__phone-status">{getNumbersString(activatedNumbers)}</span>
                            <span className="call__phone-status call__phone-status--active">{format(seconds)}</span>
                        </div>
                    </>
            }
        </div>
    )
}