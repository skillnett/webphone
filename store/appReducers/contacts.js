import { createReducer } from 'redux-create-reducer';
import { RecentsImageSources } from '../../pages/recents/ImageSources';

const initialState = {
    contactsList: [
        {
            id: 0,
            phoneNumber: '108',
            userName: 'Eeden Athouel',
            userAvatar: RecentsImageSources.userAvatarSrc,
            bgColor: '#e7f3fe',
            textColor: '#54a6f7'
        },
        {
            id: 1,
            phoneNumber: '104',
            userName: 'Laury Sheleg',
            userAvatar: RecentsImageSources.userAvatarSrc,
            bgColor: '#fef5e7',
            textColor: '#f3a526'
        },
        {
            id: 2,
            phoneNumber: '203',
            userName: 'Didier Nizard',
            userAvatar: RecentsImageSources.userAvatarSrc,
            bgColor: '#ebf9f5',
            textColor: '#76d6bb'
        },
        {
            id: 3,
            phoneNumber: '204',
            userName: 'Jordan Sitbon',
            userAvatar: RecentsImageSources.userAvatarSrc,
            bgColor: '#f0ecf9',
            textColor: '#9578d3'
        },
        {
            id: 4,
            phoneNumber: '202',
            userName: 'Daniel',
            userAvatar: RecentsImageSources.userAvatarSrc,
            bgColor: '#fef5e7',
            textColor: '#f3a526'
        },
        {
            id: 5,
            phoneNumber: '2002',
            userName: 'Daniel Portable',
            userAvatar: RecentsImageSources.userAvatarSrc,
            bgColor: '#ebf9f5',
            textColor: '#76d6bb'
        },
        {
            id: 6,
            phoneNumber: '201',
            userName: 'Yoni Journo',
            userAvatar: RecentsImageSources.userAvatarSrc,
            bgColor: '#f0ecf9',
            textColor: '#9578d3'
        },
        {
            id: 7,
            phoneNumber: '106',
            userName: 'Bruno Garcin',
            userAvatar: RecentsImageSources.userAvatarSrc,
            bgColor: '#fce8ed',
            textColor: '#f28ca6'
        },
        {
            id: 8,
            phoneNumber: '157',
            userName: 'Name Surname',
            userAvatar: RecentsImageSources.userAvatarSrc,
            bgColor: '#fef5e7',
            textColor: '#f3a526'
        },
        {
            id: 9,
            phoneNumber: '166',
            userName: 'Name Surname',
            userAvatar: RecentsImageSources.userAvatarSrc,
            bgColor: '#fef5e7',
            textColor: '#f3a526'
        },
    ]
}

export const reducer = createReducer(initialState, {});