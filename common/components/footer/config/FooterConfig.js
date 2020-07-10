import { AppUrls } from "../../../AppUrls";
import { ReactComponent as ContactsIcon } from '../../../../../public/images/footer/tab_contacts.svg';
import { ReactComponent as DialpadIcon } from '../../../../../public/images/footer/tab_dialpad.svg';
import { ReactComponent as RecentsIcon } from '../../../../../public/images/footer/tab_recents.svg';
import { ReactComponent as SettingsIcon } from '../../../../../public/images/footer/tab_settings.svg';
import { UrlsProvider } from '../../../../utils/urlUtils';
import { ContactsPageTypes } from "../../../enums";

export const FooterConfig = [
    {
        id: 0,
        name: 'Recents',
        url: AppUrls.recents,
        ico: RecentsIcon,
        icoWidth: '18px'
    },
    {
        id: 1,
        name: 'Dialpad',
        url: AppUrls.dialpad,
        ico: DialpadIcon,
        icoWidth: '16px'
    },
    {
        id: 2,
        name: 'Contacts',
        url: UrlsProvider.contactsUrlGenerator(ContactsPageTypes.AllContacts),
        ico: ContactsIcon,
        icoWidth: '21px'
    },
    {
        id: 3,
        name: 'Settings',
        url: AppUrls.settings,
        ico: SettingsIcon,
        icoWidth: '18px'
    }
]