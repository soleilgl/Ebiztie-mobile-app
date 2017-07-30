import { SAVE_ALL_PROJECTS_INFO } from '../actions';

const initialState = [];
//allProjectsInfo {
//      id: e.id,
//      name: e.name,
//     icon: !e.projectIcon ? config.Discover.defaultProjectIcon : e.projectIcon,(1234.jpg->filename)
//     description: e.project_description,
//     location: e.location_full,
//     field: e.project_fields,
//     phase: e.project_phase==null?"": phaseMap[e.project_phase],
//     funding: e.project_funding==null?"": fundingMap[e.project_funding],
//     funding_amount: getProjectFunding(e.funding_firstphase, e.funding_secondphase, e.funding_thirdphase)
// }
export default function allProjectsInfo(state = initialState, action ){
    switch (action.type) {
        case SAVE_ALL_PROJECTS_INFO:
            return action.allProjectsInfo;
        default: return state;
    }
}