import { SAVE_ALL_PROJECTS_INFO } from '../actions';

const initialState = {};
//allProjectsInfo {}
export default function allProjectsInfo(state = initialState, action ){
    switch (action.type) {
        case SAVE_ALL_PROJECTS_INFO:
            return action.allProjectsInfo;
        default: return state;
    }
}