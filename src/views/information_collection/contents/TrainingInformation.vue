<template>
  <div class="form-box">
    <div class="form-tips-title">
      <p>说明：请填写已结束的培训经历</p>
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
        <el-form-item label="开始日期" required>
          <el-date-picker
            type="date"
            class="form-date"
            placeholder="选择日期"
            v-model="formData.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期" required>
          <el-date-picker
            type="date"
            class="form-date"
            placeholder="选择日期"
            v-model="formData.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="培训方式" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择培训方式" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="培训项目名称">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="主办单位">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>
      </div>
    </el-form>
    <div class="form-footer-box">
      <el-divider />
      <el-button type="primary" @click="submitForm('formData')" class="form-save-btn">保存</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        userId: 1000000,
        firstName: "YINFWEN",
        name: "",
        sex: "F",
        countryBirth: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
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
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [
          { required: true, message: "请填写活动形式", trigger: "blur" }
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
