<template>
  <div class="form-box">
    <div class="form-tips-title">
      <p>说明：</p>
      <p>&emsp;&emsp;1）预备党员和中共党员参加时间为支部大会接收为预备党员的日期；</p>
      <p>&emsp;&emsp;2）民革为支部大会通过的日期；</p>
      <p>&emsp;&emsp;3）民盟、民建、民进、农工党、致公党、九三学社的参加时间为地市级以上（含地市级）组织批准的日期；</p>
      <p>&emsp;&emsp;4）台盟为省级以上（含省级）组织批准的日期；</p>
      <p>&emsp;&emsp;5）无党派民主人士请填写加入青联会、知联会的组织批准日期。</p>
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
        <el-form-item label="政治面貌" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择政治面貌" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="参加时间" required>
          <el-date-picker
            type="date"
            class="form-date"
            placeholder="选择日期"
            v-model="formData.date1"
            style="width: 100%;"
          ></el-date-picker>
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
