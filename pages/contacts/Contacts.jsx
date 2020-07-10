import React from 'react';
import { useSelector } from 'react-redux';
import { EmptyPageContent } from '../../shared/components/emptyPageContent/EmptyPageContent';
import { ContactsImageSources } from './ImageSources';
import { ContactsList } from './components/ContactsList';
import './Contacts.scss';

export const Contacts = () => {

    const contactsList = useSelector(state => state.contacts.contactsList);
    const hasContacts = !!contactsList.length;

    return hasContacts ?
        <ContactsList {...{ contactsList }} /> :
        <EmptyPageContent
            pageTitle='Contacts'
            imgSrc={ContactsImageSources.contactEmptyImage}
            messageLine1='You don’t have any contacts yet.'
            bgImageSrc={ContactsImageSources.contactEmptyBgImage}
        />
};