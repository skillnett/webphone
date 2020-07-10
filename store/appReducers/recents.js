import { createReducer } from 'redux-create-reducer';
import { CallTypes } from '../../common/enums';
import { RecentsImageSources } from '../../pages/recents/ImageSources';

const initialState = {
    recentCalls: [
        {
            id: 0,
            callType: CallTypes.Incoming,
            phoneNumber: '+972 765 432 10',
            callDate: '14:16',
            userAvatar: RecentsImageSources.userAvatarSrc
        },
        {
            id: 1,
            callType: CallTypes.Outgoing,
            phoneNumber: '+972 012 345 67',
            callDate: '09:41',
            userAvatar: RecentsImageSources.userAvatarSrc
        },
        {
            id: 2,
            callType: CallTypes.Incoming,
            phoneNumber: '+972 012 345 67',
            callDate: 'Monday',
            userAvatar: RecentsImageSources.userAvatarSrc
        },
        {
            id: 3,
            callType: CallTypes.Outgoing,
            phoneNumber: '+972 012 341 11',
            callDate: 'Saturday',
            userAvatar: RecentsImageSources.userAvatarSrc
        },
        {
            id: 4,
            callType: CallTypes.Outgoing,
            phoneNumber: '+972 012 345 23',
            callDate: ' 14/05/2020',
            userAvatar: RecentsImageSources.userAvatarSrc
        },
        {
            id: 5,
            callType: CallTypes.Incoming,
            phoneNumber: '+972 012 345 99',
            callDate: '13/04/2020',
            userAvatar: RecentsImageSources.userAvatarSrc
        },
        {
            id: 6,
            callType: CallTypes.Incoming,
            phoneNumber: '+972 012 345 00',
            callDate: '16/03/2020',
            userAvatar: RecentsImageSources.userAvatarSrc
        },
        {
            id: 7,
            callType: CallTypes.Outgoing,
            phoneNumber: '+972 012 778 97',
            callDate: ' 14/05/2020',
            userAvatar: RecentsImageSources.userAvatarSrc
        },
        {
            id: 8,
            callType: CallTypes.Incoming,
            phoneNumber: '+972 012 524 81',
            callDate: '13/04/2020',
            userAvatar: RecentsImageSources.userAvatarSrc
        },
        {
            id: 9,
            callType: CallTypes.Incoming,
            phoneNumber: '+972 012 345 00',
            callDate: '16/03/2020',
            userAvatar: RecentsImageSources.userAvatarSrc
        },
    ]
}

export const reducer = createReducer(initialState, {});