<template>
  <div class="form-box">
    <div class="tips">
      <h1>动态表单校验四：页面动态字段表单校验</h1>
      <p>1. 所有字段添加校验规则</p>
      <p>1. 根据条件动态v-if字段实现页面页面动态字段与必填联动</p>
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
        <el-form-item label="选项一" prop="value1">
          <el-select v-model="formData.value1" placeholder="请选择" class="form-sel" clearable>
            <el-option
              v-for="item in List"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="选项二" prop="value2" v-if="formData.value1 != 2">
          <el-select v-model="formData.value2" placeholder="请选择" class="form-sel" clearable>
            <el-option
              v-for="item in List"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="选项三" prop="value3" v-if="formData.value1 != 3">
          <el-select v-model="formData.value3" placeholder="请选择" class="form-sel" clearable>
            <el-option
              v-for="item in List"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
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
        value1: "",
        value2: "",
        value3: ""
      },
      flag: true,
      rules: {
        value1: [
          { required: true, message: "请选择", trigger: "change" }
        ],
        value2: [
          { required: true, message: "请选择", trigger: "change" }
        ],
        value3: [
          { required: true, message: "请选择", trigger: "change" }
        ]
      },
      List: [
        {
          label: "选项一",
          value: 1
        },
        {
          label: "选项二",
          value: 2
        },
        {
          label: "选项三",
          value: 3
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

.avatar-box {
  width: 30%;
  height: 260px;
  box-sizing: border-box;
  float: right;
  text-align: center;
  padding-top: 6px;

  .avatar-img {
    width: 118px;
    min-width: 118px;
    max-width: 118px;
    height: 160px;
    min-height: 160px;
    max-height: 160px;
    background-color: #eda04b;
    display: inline-block;
  }
  .avatar-tips {
    font-size: 13px;
    color: #f99d33;
    letter-spacing: 0;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
}

.form-inp-tips {
  width: 66.6666;
  display: inline-block;
  font-size: 13px;
  color: #f99d33;
  text-indent: 10px;
  text-align: center;
  height: 40px;
  line-height: 40px;
}

.tips {
  & > h1 {
    font-size: 16px;
    font-weight: 600;
    color: red;
    margin-bottom: 10px;
  }
  & > p {
    font-size: 14px;
    line-height: 32px;
    color: red;
    text-indent: 2em;
  }
  margin-bottom: 20px;
}
.btn-box {
  margin-bottom: 20px;
}
</style>
