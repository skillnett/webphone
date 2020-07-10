import * as Recents from './appReducers/recents';
import * as Profile from './appReducers/profile';
import * as Contacts from './appReducers/contacts';
import * as Dialpad from './appReducers/dialpad';
import * as Call from './appReducers/call';

export const reducers = {
    recents: Recents.reducer,
    profile: Profile.reducer,
    contacts: Contacts.reducer,
    dialpad: Dialpad.reducer,
    call: Call.reducer,
};