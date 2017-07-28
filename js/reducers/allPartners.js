import { SAVE_ALL_PARTNERS_INFO } from '../actions';

const initialState = {};
//allPartnersInfo{user_id, role, nickname, icon, summaryDemo, summaryBio}
export default function allPartnersInfo(state = initialState, action ){
    switch (action.type) {
        case SAVE_ALL_PARTNERS_INFO:
            return action.allPartnersInfo;
        default: return state;
    }
}