import { NICKNAME_CHANGE } from '../actions'
const initialState = {};
export default function new_basicInfo(state = initialState, action ){
    switch (action.type) {
        case NICKNAME_CHANGE:
            return { ...state, age:action.new_nickname };

    default: return state;
}
}