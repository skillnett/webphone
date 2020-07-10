import { AppUrls } from '../common/AppUrls';

export const UrlsProvider = {
    callUrlGenerator: slug => AppUrls.call.replace(':slug', slug),
    contactsUrlGenerator: slug => AppUrls.contacts.replace(':slug', slug),
}