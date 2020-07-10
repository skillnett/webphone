import React from 'react';
import { Switch } from 'react-router';
import { Login, Recents, Contacts, Settings, Dialpad, Account, CallPreferences, SoundAndDevices, Help, Call, Conference, Keypad } from './pages';
import { WebPhoneRoute } from './common/components/appLayout/WebPhoneRoute';
import { AppUrls } from './common/AppUrls';

export const App = () => (
    <Switch>
        <WebPhoneRoute path={AppUrls.recents} component={Recents} />
        <WebPhoneRoute path={AppUrls.dialpad} component={Dialpad} />
        <WebPhoneRoute path={AppUrls.contacts} component={Contacts} />
        <WebPhoneRoute exact path={AppUrls.settings} component={Settings} />
        <WebPhoneRoute path={AppUrls.account} component={Account} />
        <WebPhoneRoute path={AppUrls.callPreferences} component={CallPreferences} />
        <WebPhoneRoute path={AppUrls.soundAndDevices} component={SoundAndDevices} />
        <WebPhoneRoute path={AppUrls.help} component={Help} />
        <WebPhoneRoute path={AppUrls.call} component={Call} withoutFooter />
        <WebPhoneRoute path={AppUrls.conference} component={Conference} withoutFooter />
        <WebPhoneRoute path={AppUrls.keypad} component={Keypad} withoutFooter />
        <WebPhoneRoute component={Login} withoutLayout />
    </Switch>
);