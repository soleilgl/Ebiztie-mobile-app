import { SAVE_ALL_BUSINESS_INFO } from '../actions';

const initialState = {};
export default function allBusinessInfo(state = initialState, action ){
    switch (action.type) {
        case SAVE_ALL_BUSINESS_INFO:
            return action.allBusinessInfo;
        default: return state;
    }
}