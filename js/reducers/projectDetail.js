import { GET_PROJECT_DETAIL_INFO } from '../actions';

const initialState = {};
// partnerDetailInfo{
//createdBy: {type: DataTypes.BIGINT, allowNull:false},
// threadId:  {type: DataTypes.BIGINT, allowNull:false},
// name:  {type: DataTypes.STRING(70), allowNull: false},
// website_link: {type: DataTypes.STRING(255), allowNull: true},
// project_description:DataTypes.TEXT,
//     project_fields: DataTypes.STRING(255),
//     icon:  DataTypes.STRING(200),
//     location_full:DataTypes.STRING(255),
//     techTag:DataTypes.STRING(100),
//     project_phase: {type: DataTypes.INTEGER, allowNull: true},
// project_finished:DataTypes.TEXT,
//     advantage: {type: DataTypes.TEXT, allowNull:true},
// prepareTime: {type: DataTypes.STRING(100), allowNull:true},
// partnerWithSME: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue:false},
// project_funding: {type: DataTypes.INTEGER, allowNull: true},
// currentFundingAmount:{type: DataTypes.STRING(100), allowNull:true},
// selfRaised_fund:{type: DataTypes.STRING(100), allowNull:true},
// crowd_fund:{type: DataTypes.STRING(100), allowNull:true},
// angelPrivate_fund:{type: DataTypes.STRING(100), allowNull:true},
// ventureCapital_fund: {type: DataTypes.STRING(100), allowNull:true},
// funding_firstphase: {type: DataTypes.STRING(100), allowNull:true},
// funding_secondphase: {type: DataTypes.STRING(100), allowNull:true},
// funding_thirdphase: {type: DataTypes.STRING(100), allowNull:true},
// aboutTeam: {type:DataTypes.TEXT, allowNull:true},
// founder1: {type: DataTypes.STRING(100), allowNull:true},
// founder2: {type: DataTypes.STRING(100), allowNull:true},
// founder3: {type: DataTypes.STRING(100), allowNull:true},
// founder4: {type: DataTypes.STRING(100), allowNull:true},
// investor1: {type: DataTypes.STRING(100), allowNull:true},
// investor2: {type: DataTypes.STRING(100), allowNull:true},
// investor3: {type: DataTypes.STRING(100), allowNull:true},
// investor4: {type: DataTypes.STRING(100), allowNull:true},
// broadMember1: {type: DataTypes.STRING(100), allowNull:true},
// broadMember2: {type: DataTypes.STRING(100), allowNull:true},
// broadMember3: {type: DataTypes.STRING(100), allowNull:true},
// broadMember4: {type: DataTypes.STRING(100), allowNull:true},
// advisor1: {type: DataTypes.STRING(100), allowNull:true},
// advisor2: {type: DataTypes.STRING(100), allowNull:true},
// advisor3: {type: DataTypes.STRING(100), allowNull:true},
// advisor4: {type: DataTypes.STRING(100), allowNull:true},
//
// myIncubator:{type:DataTypes.INTEGER, allowNull:true},
// myIncubatorName:{type: DataTypes.STRING(255), allowNull: true},
//
// teamNumber: {type: DataTypes.INTEGER, allowNull: true},
// project_team: DataTypes.TEXT,
//     project_positions: DataTypes.STRING(255),
//     partner_quality:DataTypes.TEXT,
//     partner_responsibility:DataTypes.TEXT,
//     partner_cooperationoption:{type: DataTypes.INTEGER, allowNull: true},
// partner_compensationoption:{type: DataTypes.INTEGER, allowNull: true},
// deleted: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue:false},
// projectIcon:{type: DataTypes.STRING(255), allowNull: true},
// projectPictures:{type: DataTypes.ARRAY(DataTypes.STRING(255)), allowNull: true}
// }
export default function projectDetailInfo(state = initialState, action ){
    switch (action.type) {
        case GET_PROJECT_DETAIL_INFO:
            return action.data;
        default: return state;
    }
}