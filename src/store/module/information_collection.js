
export default {
  // dispatch 指定模块名称
  namespaced: true,
  state: {
    navList: [
      {
        name: "个人基础信息",
        id: "BasicInformation"
      },
      {
        name: "入职信息",
        id: "EntryInformation"
      },
      {
        name: "政治面貌",
        id: "PoliticsStatus"
      },
      {
        name: "地址信息",
        id: "AddressMessage"
      },
      {
        name: "家庭成员信息",
        id: "FamilyInformation"
      },
      {
        name: "学历信息",
        id: "EducationInformation"
      },
      {
        name: "工作经历",
        id: "WorkExperience"
      },
      {
        name: "外部兼职",
        id: "ExternalParttime"
      },
      {
        name: "培训信息",
        id: "TrainingInformation"
      },
      {
        name: "职业资格",
        id: "ProfessionalQualification"
      },
      {
        name: "职称信息",
        id: "TitleTnformation"
      },
      {
        name: "语言能力",
        id: "Language"
      },
      {
        name: "奖励情况",
        id: "RewardSituation"
      }
    ],
    navActive: "BasicInformation"
  },
  getters: {
  },
  mutations: {
    SET_NAVLIST: (state, navList) => {
      state.navList = navList;
    },
    SET_NAVACTIVE: (state, navActive) => {
      state.navActive = navActive;
    }
  },
  actions: {
  }
};
