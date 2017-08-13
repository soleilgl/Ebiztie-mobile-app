import { PARTNER_DETAIL_PARTNER } from '../actions';

const initialState = {};
// partnerDetailInfo{
//     tags: user.dataValues.tags,
//     currentRole: role,
//     visitReason: visitReason,
//     company: company,
//     schools: schools.join(),
//     employers: employers.join(),
//     industry: industry,
//     occupation: occupation,
//     experience: experience,
//     specialty: specialty,
//     characters:
//     skill: skill,
//     //patent: patent,
//     certificate: certificate,
//     hobbies: hobbies,
//     characters: characters,
//     linkedin: linkedin,
//     facebook: facebook,
//     twitter: twitter,
//     wechat: wechat,
//     basicInfo:{user_id, role, nickname, icon, summaryDemo, summaryBio}
// }
export default function partnerDetailInfo(state = initialState, action ){
    switch (action.type) {
        case PARTNER_DETAIL_PARTNER:
            return action.partnerInfo;
        default: return state;
    }
}