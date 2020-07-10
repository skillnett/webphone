import { createReducer } from 'redux-create-reducer';

// types
const CHANGE_PHONE_NUMBER = 'CHANGE_PHONE_NUMBER';

const initialState = {
    enteredPhoneNumber: ''
}

// reducer
export const reducer = createReducer(initialState, {
    [CHANGE_PHONE_NUMBER]: (state, { payload }) => ({
        ...state,
        enteredPhoneNumber: payload.value
    })
});

//actions
export const changePhoneNumber = value => dispatch => dispatch({
    type: CHANGE_PHONE_NUMBER,
    payload: { value }
})