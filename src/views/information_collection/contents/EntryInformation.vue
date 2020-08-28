<template>
  <div class="form-box">
    <div class="form-tips-title">
      <p>说明：工资卡信息填写将影响您的发薪及报销，请仔细填写。填写账号时请连贯填写，中间不要留空</p>
    </div>
    <el-form
      :model="formData"
      :rules="rules"
      :inline="true"
      ref="formData"
      label-width="100px"
      class="form-content"
    >
      <div class="form-align3">
        <el-form-item label="证件类型" prop="countryBirth">
          <el-select v-model="formData.countryBirth" placeholder="请选择证件类型" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="证件号码">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="证件有效期" required>
          <el-date-picker
            type="date"
            class="form-date"
            placeholder="选择日期"
            v-model="formData.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="签发机关" prop="fileid">
          <el-input v-model="formData.fileid" class="form-inp" />
        </el-form-item>

        <el-form-item label="户口存放单位">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="休假参考日期" required>
          <el-date-picker
            type="date"
            class="form-date"
            placeholder="选择日期"
            v-model="formData.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="工资卡银行名称" prop="firstName">
          <!--
            v-model 联动key值
            bank.sync 联动对象
          -->
          <SearchBank v-model="formData.firstName" :bank.sync="bank" placeholder="请选择工资卡银行名称" />
        </el-form-item>

        <el-form-item label="工资银行卡账号" prop="firstName">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <div>
          <el-form-item label="身份证附件上传" prop="fileid">
            <UploadFile v-model="formData.fileid" :fileList.sync="fileList" />
          </el-form-item>
        </div>

        <div>
          <el-form-item label="银行卡附件上传" prop="card">
            <UploadFile v-model="formData.card" :fileList.sync="cardList" />
          </el-form-item>
        </div>
      </div>
    </el-form>
    <div class="form-footer-box">
      <el-divider />
      <el-button type="primary" @click="submitForm('formData')" class="form-save-btn">保存</el-button>
    </div>
  </div>
</template>
<script>
import SearchBank from "../modules/SearchBank";
import UploadFile from "../modules/UploadFile";
export default {
  components: {
    SearchBank,
    UploadFile
  },
  data() {
    return {
      formData: {
        userId: 1000000,
        firstName: "102290014579",
        name: "",
        sex: "F",
        countryBirth: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        fileid: "",
        card: "1295995276426461187"
      },
      bank: {
        BANKA: "中国工商银行股份有限公司上海市中科路支行",
        BANKL: "102290014579",
        BANKS: "CN",
        BNKLZ: ""
      },
      fileList: [
        {
          "fileUrl": "EHR二期_金控板块_小额贷款证明模板测试报告_20200323.xlsx",
          "id": "1295995276426461187",
          "name": "EHR二期_金控板块_小额贷款证明模板测试报告_20200323.xlsx",
          "pernr": "",
          "planId": "",
          "planNodeId": "",
          "planStepId": "",
          "showName": "EHR二期_金控板块_小额贷款证明模板测试报告_20200323.xlsx"
        },
        {
          "fileUrl": "EHR二期_金控板块_小额贷款证明模板测试报告_202003212.xlsx",
          "id": "129599527642646118123",
          "name": "EHR二期_金控板块_小额贷款证明模板测试报告_20200323.xlsx",
          "pernr": "",
          "planId": "",
          "planNodeId": "",
          "planStepId": "",
          "showName": "EHR二期_金控板块_小额贷款证明模板测试报告_20200323.xlsx"
        }
      ],
      cardList: [
        {
          "fileUrl": "EHR二期_金控板块_小额贷款证明模板测试报告_20200323.xlsx",
          "id": "1295995276426461187",
          "name": "EHR二期_金控板块_小额贷款证明模板测试报告_20200323.xlsx",
          "pernr": "",
          "planId": "",
          "planNodeId": "",
          "planStepId": "",
          "showName": "EHR二期_金控板块_小额贷款证明模板测试报告_20200323.xlsx"
        }
      ],
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        sex: [
          { required: true, message: "请选择姓别", trigger: "change" }
        ],
        date1: [
          { type: "date", required: true, message: "请选择日期", trigger: "change" }
        ],
        date2: [
          { type: "date", required: true, message: "请选择时间", trigger: "change" }
        ],
        type: [
          { type: "array", required: true, message: "请至少选择一个活动性质", trigger: "change" }
        ],
        firstName: [
          { required: true, message: "请填写英文名称", trigger: "change" }
        ],
        fileid: [
          { required: true, message: "请上传附件", trigger: "change" },
          { required: true, message: "请上传附件", trigger: "blur" }
        ]
      },
      sexList: [
        {
          label: "男",
          value: "M"
        },
        {
          label: "女",
          value: "F"
        }
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang='less' scoped>
@import "../form.less";
@import "./content.less";
</style>
