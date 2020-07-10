import { createReducer } from 'redux-create-reducer';
import { ModeTypes } from '../../common/enums';
import { SpeakersConfig, SoundNotificationConfig, MicrophoneConfig } from './models/SoundAndDevicesConfigs';
import { CallPreferences } from './models/CallPreferences';

//types
const CHANGE_MODE = 'CHANGE_MODE';
const ON_CALL_PREFERENCES_CHANGE = 'ON_CALL_PREFERENCES_CHANGE';
const ON_DEVICE_CONFIG_CHANGE = 'ON_DEVICE_CONFIG_CHANGE';

const initialState = {
    mode: ModeTypes.Available,
    userName: 'Eugene',
    userLastName: 'Syrotiuk',
    avatar: '/images/shared/user_avatar.svg',
    userNumbers: [
        {
            id: 0,
            number: 777,
        },
        {
            id: 1,
            number: 999,
        }
    ],
    callPreferences: CallPreferences,
    soundNotificationConfig: SoundNotificationConfig,
    speakersConfig: SpeakersConfig,
    microphoneConfig: MicrophoneConfig
}

//reducer
export const reducer = createReducer(initialState, {
    [CHANGE_MODE]: (state, { payload }) => ({
        ...state,
        mode: payload.modeId
    }),
    [ON_CALL_PREFERENCES_CHANGE]: (state, { payload }) => ({
        ...state,
        callPreferences: state.callPreferences.map(pref => ({
            ...pref,
            isChecked: pref.id === payload.preferenceId ? !pref.isChecked : pref.isChecked
        }))
    }),
    [ON_DEVICE_CONFIG_CHANGE]: (state, { payload }) => ({
        ...state,
        [payload.configName]: state[payload.configName].map(config => ({
            ...config,
            isSelected: config.id === payload.id
        }))
    })
});

//actions
export const changeMode = modeId => dispatch => dispatch({
    type: CHANGE_MODE,
    payload: { modeId }
})

export const onCallPreferencesChange = preferenceId => dispatch => dispatch({
    type: ON_CALL_PREFERENCES_CHANGE,
    payload: { preferenceId }
})

export const onDeviceConfigChange = (id, configName) => dispatch => dispatch({
    type: ON_DEVICE_CONFIG_CHANGE,
    payload: { id, configName }
})