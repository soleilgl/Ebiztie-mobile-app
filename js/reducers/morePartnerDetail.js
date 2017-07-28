import { MORE_PARTNER_INFO } from '../actions';

const initialState = {};
//morePartnerDetailInfo: {
// survey:{
//     currentSituation: situationMap[currentSituation],
//     myOrientation: orientationMap[myOrientation],
//     entrepreneurExperience: experienceMap[experience],
//     availableTime: availableTimeMap[availableTime],
//     selfFunding: fundingMap[selfFunding],
//     direction: industryMap[direction],
//     desiredLocation: businessLocMap[desiredLocation],
//     innerQualities: innerQualities,
//     establishedVentures: establishedVentures,
//     hasStarted: hasStarted,
//     cooperationMethod: cooperationMap[cooperationMethod],
//     incubatorInfo: incubatorMap[incubatorInfo],
//     compensationOption : compensationMap[compensationOption]
// },
// businesses: [{
//     id: b.dataValues.id,
//     name: b.dataValues.name,
//     typeNumber: typeNumber,
//     type: typeMap[typeNumber],
//     location_full: b.dataValues.location_full,
//     createYear: yearMap[createYear],
//     industry: industryMap[industry],
//     employeeRange: employeeRangeMap[employeeRange],
//     myPosition: occupationMap[myPosition],
//     technology: b.dataValues.technology,
//     summary: b.dataValues.summary,
//     detail: b.dataValues.detail,
//     service: b.dataValues.service,
//     myIncubator: incubatorMap[myIncubator],
//     myIncubatorName: b.dataValues.myIncubatorName,
//     partnerWithSME: !!b.dataValues.partnerWithSME ? "Yes" : "No",
//     smeVisitPurpose: visitPurposeMap[smeVisitPurpose],
//     investIndustry: investIndustryMap[investIndustry],
//     investHistory: b.dataValues.investHistory,
//     acceptApplication: !!b.dataValues.acceptApplication ? "Yes" : "No",
//     applicationDueDt: b.dataValues.applicationDueDt,
//     businessPictures: b.dataValues.businessPictures
// }],
// project: [{
//     id: b.dataValues.id,
//         name: b.dataValues.name,
//         project_description: b.dataValues.project_description,
//         project_fields: b.dataValues.project_fields,
//         icon: b.dataValues.icon,
//         location_country: b.dataValues.location_country,
//         location_state: b.dataValues.location_state,
//         location_city: b.dataValues.location_city,
//         location_otherCity: b.dataValues.location_otherCity,
//         location_full: b.dataValues.location_full,
//         project_phase: phase[phaseNumber],
//         project_finished: b.dataValues.project_finished,
//         project_funding: funding[fundingNumber],
//         funding_firstphase: b.dataValues.funding_firstphase,
//         funding_secondphase: b.dataValues.funding_secondphase,
//         funding_thirdphase: b.dataValues.funding_thirdphase,
//         project_team: b.dataValues.project_team,
//         project_positions: b.dataValues.project_positions,
//         partner_quality: b.dataValues.partner_quality,
//         partner_responsibility: b.dataValues.partner_responsibility,
//         partner_cooperationoption: Cooperation[cooperationoptionNumber],
//         partner_compensationoption: Compensation[compensationoptionNumber]
// }],
//}
export default function morePartnerDetailInfo(state = initialState, action ){
    switch (action.type) {
        case MORE_PARTNER_INFO:
            return action.data;
        default: return state;
    }
}