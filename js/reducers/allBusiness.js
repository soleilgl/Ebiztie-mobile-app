import { SAVE_ALL_BUSINESS_INFO } from '../actions';

const initialState = {};
//allBusinessInfo{
//     id: e.id,
//     name: e.name,
//     icon: !e.businessIcon ?  config.Discover.defaultBusinessIcon : e.businessIcon,
//     type: e.type==null? null: typeMap[e.type],
//     industry: e.industry==null? null: indMap[e.industry],
//     employeeRange: e.employeeRange==null? null:empMap[e.employeeRange],
//     location: e.location_full,
//     summary: e.summary
// }
export default function allBusinessInfo(state = initialState, action ){
    switch (action.type) {
        case SAVE_ALL_BUSINESS_INFO:
            return action.allBusinessInfo;
        default: return state;
    }
}