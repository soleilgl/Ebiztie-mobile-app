import { GET_BUSINESS_DETAIL_INFO } from '../actions';

const initialState = {};
// partnerDetailInfo{
//    aboutTeam:null
//     acceptApplication:false
//     angelPrivate_fund:"$0"
//     annualIncome:1
//     applicationDtTz:""
//     applicationDueDt: null
//     basicInfo:employeeRange:"1-5"
//        icon:"https://businesspicturesbucket.s3-us-west-1.amazonaws.com/579f0d63cc58ddbb11e055f857564e5b.jpg?AWSAccessKeyId=AKIAJVA3NAQYBKGDIZAA&Expires=1501458324&Signature=MtZt0R%2F9dijcrsTTqSc7lKJruBM%3D"
//        id:9
//        industry    :    "Automotive"
//        location    :    "San Jose, CA, United States"
//        name    :    "Game Factory"
//        summary    :    "very new business"
//        type    :    "Startup"
//     __proto__:Object
//     businessIcon:"579f0d63cc58ddbb11e055f857564e5b.jpg"
//     businessPictures:[]
//     createYear:8
//     createdBy:"37"
//     crowd_fund:"$0"
//     currentFundingAmount:"$123000"
//     deleted:false
//     detail:"very new business"
//     employeeRange:1
//     founder1:"Adel"
//     founder2:null
//     funding_firstphase:null
//     funding_method:null
//     funding_secondphase:null
//     id:9
//     industry:441
//     investHistory:""
//     investIndustry:null
//     investor1:null
//     investor2:null
//     location_full:"San Jose, CA, United States"
//     myIncubator:null
//     myIncubatorName:"1"
//     myPosition:319
//     name:"Game Factory"
//     partnerWithSME:true
//     selfRaised_fund:"$0"
//     service:"very new business"
//     smeVisitPurpose:null
//     summary:"very new business"
//     technology:null
//     threadId:"37"
//     type:1
//     ventureCapital_fund:null
// }
export default function businessDetailInfo(state = initialState, action ){
    switch (action.type) {
        case GET_BUSINESS_DETAIL_INFO:
            return action.data;
        default: return state;
    }
}