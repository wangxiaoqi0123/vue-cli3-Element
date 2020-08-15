<template>
  <div class="form-box">
    <el-form
      :model="formData"
      :rules="rules"
      :inline="true"
      ref="formData"
      label-width="100px"
      class="form-content"
    >
      <div class="form-align3">
        <el-form-item label="地址类型">
          <el-input v-model="formData.userId" class="form-inp" :readonly="true" />
        </el-form-item>

        <el-form-item label="国家/地区" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择政治面貌" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <div class="row-algin2">
          <el-form-item label="国家/地区">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="formData.userId"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <el-divider />
    </el-form>

    <el-form
      :model="formData"
      :rules="rules"
      :inline="true"
      ref="formData"
      label-width="100px"
      class="form-content"
    >
      <div class="form-align3">
        <el-form-item label="地址类型">
          <el-input v-model="formData.userId" class="form-inp" :readonly="true" />
        </el-form-item>

        <el-form-item label="国家/地区" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择政治面貌" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <div class="row-algin2">
          <el-form-item label="国家/地区">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="formData.userId"
            ></el-input>
          </el-form-item>
        </div>
      </div>
      <el-divider />
    </el-form>
    <div class="form-footer-box">
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
