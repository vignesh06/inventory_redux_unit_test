import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loginToken: ""
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN:
            return updateObject(state, {loginToken:action.value});
    }
    return state;
};

export default reducer;