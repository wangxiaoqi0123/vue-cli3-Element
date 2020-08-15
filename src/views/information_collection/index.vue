<template>
  <div>
    <el-container class="info-collection">
      <el-header class="info-header"></el-header>
      <el-container>
        <el-aside width="180px" class="info-aside">
          <AsideBar />
        </el-aside>
        <el-main class="info-mian">
          <TitleTips />
          <Content>
            <!-- 个人基础信息 -->
            <template v-slot:BasicInformation>
              <BasicInformation />
            </template>
            <!-- 入职信息 -->
            <template v-slot:EntryInformation>
              <EntryInformation />
            </template>
            <!-- 政治面貌 -->
            <template v-slot:PoliticsStatus>
              <PoliticsStatus />
            </template>
            <!-- 地址信息 -->
            <template v-slot:AddressMessage>
              <AddressMessage />
            </template>
            <!-- 家庭成员信息 -->
            <template v-slot:FamilyInformation>
              <FamilyInformation />
            </template>
            <!-- 学历信息 -->
            <template v-slot:EducationInformation>
              <EducationInformation />
            </template>
            <!-- 工作经历 -->
            <template v-slot:WorkExperience>
              <WorkExperience />
            </template>
            <!-- 外部兼职 -->
            <template v-slot:ExternalParttime>
              <ExternalParttime />
            </template>
            <!-- 培训信息 -->
            <template v-slot:TrainingInformation>
              <TrainingInformation />
            </template>
            <!-- 职业资格 -->
            <template v-slot:ProfessionalQualification>
              <ProfessionalQualification />
            </template>
            <!-- 职称信息 -->
            <template v-slot:TitleTnformation>
              <TitleTnformation />
            </template>
            <!-- 语言能力 -->
            <template v-slot:Language>
              <Language />
            </template>
            <!-- 奖励情况 -->
            <template v-slot:RewardSituation>
              <RewardSituation />
            </template>
          </Content>
        </el-main>
      </el-container>
    </el-container>
    <MessageTips />
  </div>
</template>
<script>
import AsideBar from "./modules/AsideBar";
import TitleTips from "./modules/TitleTips";
import Content from "./modules/Content";
import BasicInformation from "./contents/BasicInformation";
import EntryInformation from "./contents/EntryInformation";
import PoliticsStatus from "./contents/PoliticsStatus";
import AddressMessage from "./contents/AddressMessage";
import FamilyInformation from "./contents/FamilyInformation";
import EducationInformation from "./contents/EducationInformation";
import WorkExperience from "./contents/WorkExperience";
import ExternalParttime from "./contents/ExternalParttime";
import TrainingInformation from "./contents/TrainingInformation";
import ProfessionalQualification from "./contents/ProfessionalQualification";
import TitleTnformation from "./contents/TitleTnformation";
import Language from "./contents/Language";
import RewardSituation from "./contents/RewardSituation";

import MessageTips from "./modules/MessageTips";
export default {
  components: {
    AsideBar,
    TitleTips,
    Content,
    BasicInformation,
    MessageTips,
    EntryInformation,
    PoliticsStatus,
    AddressMessage,
    FamilyInformation,
    EducationInformation,
    WorkExperience,
    ExternalParttime,
    TrainingInformation,
    ProfessionalQualification,
    TitleTnformation,
    Language,
    RewardSituation
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {}
};
</script>
<style lang='less' scoped>
.info-collection {
  min-height: 100vh;
  background: #f4f5f7;
}
.info-header {
  background-color: #eda04b;
}
</style>
