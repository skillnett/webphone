import { createReducer } from 'redux-create-reducer';

// types
const CHANGE_DEALING = 'CHANGE_DEALING';
const SET_CALL_NUMBER = 'SET_CALL_NUMBER';
const ADD_CALL_NUMBER = 'ADD_CALL_NUMBER';
const END_CALL = 'END_CALL';
const SET_PRIVATE_CALL = 'SET_PRIVATE_CALL';
const SWAP_NUMBERS = 'SWAP_NUMBERS';

const initialState = {
    dealing: true,
    phoneNumbers: [
        {
            id: 0,
            isActive: true,
            number: '+972 012 345 67'
        }
    ]
}

// reducer
export const reducer = createReducer(initialState, {
    [CHANGE_DEALING]: (state, { payload }) => ({
        ...state,
        dealing: payload.value
    }),
    [SET_CALL_NUMBER]: (state, { payload }) => ({
        ...state,
        phoneNumbers: [{
            id: 0,
            isActive: true,
            number: payload.phoneNumber || '+972 012 345 67'
        }]
    }),
    [ADD_CALL_NUMBER]: state => {
        const deactivatedNumbers = state.phoneNumbers.map(number => ({
            ...number,
            isActive: false
        }));
        const nextNumber = {
            id: state.phoneNumbers.length,
            isActive: true,
            number: '+972 012 345 00'
        }

        return {
            ...state,
            phoneNumbers: [...deactivatedNumbers, nextNumber]
        }
    },
    [END_CALL]: (state, { payload }) => ({
        ...state,
        phoneNumbers: state.phoneNumbers.filter(({ id }) => id !== payload.id)
    }),
    [SET_PRIVATE_CALL]: (state, { payload }) => ({
        ...state,
        phoneNumbers: state.phoneNumbers.map(number => ({
            ...number,
            isActive: payload.id === number.id
        }))
    }),
    [SWAP_NUMBERS]: state => ({
        ...state,
        phoneNumbers: state.phoneNumbers.map(number => ({
            ...number,
            isActive: !number.isActive
        }))
    })
});

//actions
export const changeDealing = value => dispatch => dispatch({
    type: CHANGE_DEALING,
    payload: { value }
})

export const setCallNumber = phoneNumber => dispatch => dispatch({
    type: SET_CALL_NUMBER,
    payload: { phoneNumber }
})

export const addCallNumber = () => dispatch => dispatch({
    type: ADD_CALL_NUMBER
})

export const endCall = id => dispatch => dispatch({
    type: END_CALL,
    payload: { id }
})

export const setPrivateCall = id => dispatch => dispatch({
    type: SET_PRIVATE_CALL,
    payload: { id }
})

export const swapActiveNumbers = () => dispatch => dispatch({
    type: SWAP_NUMBERS
})