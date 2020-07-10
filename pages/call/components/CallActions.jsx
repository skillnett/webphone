import React, { useState } from 'react';
import { ReactComponent as HoldIcon } from '../../../../public/images/dialpad/hold.svg';
import { ReactComponent as MuteIcon } from '../../../../public/images/dialpad/mute.svg';
import { ReactComponent as AddIcon } from '../../../../public/images/dialpad/add.svg';
import { ReactComponent as KeypadIcon } from '../../../../public/images/dialpad/keypad.svg';
import { ReactComponent as TransferIcon } from '../../../../public/images/dialpad/transfer.svg';
import { ReactComponent as LeadIcon } from '../../../../public/images/dialpad/lead.svg';
import { ReactComponent as SwapIcon } from '../../../../public/images/dialpad/swap.svg';
import { ReactComponent as MergeIcon } from '../../../../public/images/dialpad/merge.svg';
import { ActionCallButton } from '../../dialpad/components/ActionCallButton';
import { UrlsProvider } from '../../../utils/urlUtils';
import { ContactsPageTypes, CallPageTypes } from '../../../common/enums';
import { useHistory, useParams } from 'react-router';
import { swapActiveNumbers } from '../../../store/appReducers/call';
import { useDispatch } from 'react-redux';
import { AppUrls } from '../../../common/AppUrls';

export const CallActions = ({ dealing, setIsTimerActive, isTimerActive }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { slug } = useParams();

    const [isHold, setHold] = useState(false);
    const [isMuted, setMuted] = useState(false);

    const toggleHold = () => {
        setIsTimerActive(!isTimerActive);
        setHold(!isHold);
    }

    const toggleMute = () => setMuted(!isMuted);

    const onNavigate = url => history.push(url);
    const onTransferClick = () => onNavigate(UrlsProvider.contactsUrlGenerator(ContactsPageTypes.TransferCall));
    const onAddClick = () => onNavigate(UrlsProvider.contactsUrlGenerator(ContactsPageTypes.AddContact));
    const navigateToCallMerge = () => onNavigate(UrlsProvider.callUrlGenerator(CallPageTypes.Merged));

    const isPairCall = slug === CallPageTypes.Pair;
    const onSwapClick = () => dispatch(swapActiveNumbers());

    return (
        <div className="call__actions">
            <div className="d-flex justify-content-between mb-4">
                <ActionCallButton
                    action={toggleHold}
                    icon={HoldIcon}
                    text='hold'
                    isActive={isHold}
                    disabled={dealing}
                    iconHeight={19}
                />
                <ActionCallButton
                    action={toggleMute}
                    icon={MuteIcon}
                    text='mute'
                    isActive={isMuted}
                    disabled={dealing}
                    iconHeight={24}
                />
                <ActionCallButton
                    action={onTransferClick}
                    icon={TransferIcon}
                    text='transfer'
                    disabled={dealing}
                    iconHeight={21}
                />
            </div>
            <div className="d-flex justify-content-between">
                {
                    isPairCall ?
                        <ActionCallButton
                            action={navigateToCallMerge}
                            icon={MergeIcon}
                            text='merge'
                            disabled={dealing}
                            iconHeight={20}
                        /> :
                        <ActionCallButton
                            action={onAddClick}
                            icon={AddIcon}
                            text='add'
                            disabled={dealing}
                            iconHeight={24}
                        />
                }
                <ActionCallButton
                    action={() => onNavigate(AppUrls.keypad)}
                    icon={KeypadIcon}
                    text='keypad'
                    disabled={dealing}
                    iconHeight={19}
                />
                {
                    isPairCall ?
                        <ActionCallButton
                            action={onSwapClick}
                            icon={SwapIcon}
                            text='swap'
                            disabled={dealing}
                            iconHeight={19}
                        /> :
                        <ActionCallButton
                            action={() => { }}
                            icon={LeadIcon}
                            text='lead'
                            disabled={dealing}
                            iconHeight={20}
                        />
                }
            </div>
        </div>
    );
};