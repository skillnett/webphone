import { SettingsImageSources } from '../ImageSources';
import { AppUrls } from '../../../common/AppUrls';

export const SettingsConfig = [
    {
        id: 0,
        name: 'Account',
        ico: SettingsImageSources.accountSrc,
        url: AppUrls.account
    },
    {
        id: 1,
        name: 'Sound & Devices',
        ico: SettingsImageSources.soundSrc,
        url: AppUrls.soundAndDevices
    },
    {
        id: 2,
        name: 'Call Preferences',
        ico: SettingsImageSources.callPreferencesSrc,
        url: AppUrls.callPreferences
    },
    {
        id: 3,
        name: 'Help',
        ico: SettingsImageSources.helpSrc,
        url: AppUrls.help
    }
]