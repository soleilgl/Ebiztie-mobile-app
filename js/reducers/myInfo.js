import { SAVE_MY_INFO } from '../actions';

const initialState = {};
//myInfo {
// myBasicInfo: {
//          nickname: data.nickname,
//          realname: data.realname,
//         email: data.email,
//         agerange: !data.agerange ? 0 : Number(data.agerange),
//         sex: !data.sex ? 0 : Number(data.sex),
//         location_full: data.location_full,
//         introduction: data.introduction,
//         phone: !data.Contact ? "" : data.Contact.phone,
//         facebook: !data.Contact ? "" : data.Contact.facebook,
//         linkedin: !data.Contact ? "" : data.Contact.linkedin,
//         twitter: !data.Contact ? "" : data.Contact.twitter,
//         wechat: !data.Contact ? "" : data.Contact.wechat,
//         preferredContact:!data.Contact ? "" : data.Contact.preferredContact
// },
// myAdditionalInfo: {
//     occupation = utl.convertToNumber(data.Supplement.occupation);
//     yearOfExperience = utl.convertToNumber(data.Supplement.yearOfExperience);
//     characters = data.Supplement.characters;
//     hobbies = data.Supplement.hobbies;
//     business=data.Supplement.business;
//     company=data.Supplement.company;
//     currentRole= data.Supplement.currentRole;
//     employers= data.Supplement.employers;[]
//     industry=data.Supplement.industry;
//     schools = data.Supplement.schools;[]
//     visitReason= data.Supplement.visitReason;
// },
// mySurvey: {
//     availableTime:3
//     businessDirection:439
//     businessLocation:2
//     compensationOption:null
//     cooperationMethod:2
//     createdBy:"37"
//     currentSituation:7
//     entrepreneurialExperience:2
//     id:28
//     incubatorInfo:2
//     innerQualities:"welcome to join"
//     myOrientation:5
//     selfFunding:2
// },
// myTags: {
//     tags:"E-commerce,HTML ,Media ,Search "
// },
// mySkills: {
//     certificate:""
//     patent:""
//     skill:""
//     specialty:""
//     userId:37
// },
// mySetting: {
//     allowContact:null
//     facebook:""
//     linkedin:""
//     phone:""
//     preferredContact:3
//     twitter:""
//     user_id:"37"
//     wechat:""
// },
// }
export default function myInfo(state = initialState, action ){
    switch (action.type) {
        case SAVE_MY_INFO:
            return action.data;
        default: return state;
    }
}