<template>
  <div class="form-box">
    <div class="tips">
      <h1>动态表单校验三：动态表单添加校验</h1>
      <p>1. 对应数据配置对应规制</p>
      <p>2. 循环要校验的数组表单</p>
      <p>3. 注意 动态ref 表单添加 与 动态提交获取当前表单实例</p>
    </div>
    <div class="btn-box">
      <el-button class="form-save-btn" @click="handleClick">添加表单</el-button>
    </div>
    <el-form
      v-for="(item,index) in formList"
      :key="index"
      :model="item"
      :rules="rules"
      :inline="true"
      :ref="'formData'+index"
      label-width="100px"
      class="form-content"
    >
      <el-button class="form-del-btn" @click="delClick(index,item)">删除表单</el-button>
      <div class="form-align3">
        <el-form-item label="姓名" :prop="required.name">
          <el-input v-model="item.name" class="form-inp" />
        </el-form-item>

        <el-form-item label="日期" :prop="required.date">
          <el-date-picker
            type="date"
            class="form-date"
            placeholder="选择日期"
            v-model="item.date"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="性别" :prop="required.sex">
          <el-select v-model="item.sex" placeholder="请选择性别" class="form-sel" clearable>
            <el-option
              v-for="item2 in sexList"
              :key="item2.value"
              :label="item2.label"
              :value="item2.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <div class="form-footer-box">
          <el-divider />
          <el-button type="primary" @click="submitForm('formData'+index)" class="form-save-btn">保存</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formList: [
        {
          name: "",
          sex: "",
          date: ""
        }
      ],
      formData: {
        name: "",
        sex: "",
        date: ""
      },
      required: {
        name: "name",
        sex: "sex",
        date: "date"
      },
      showForm: {
        name: true,
        sex: true,
        date: true
      },
      flag: true,
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" }
        ],
        sex: [
          { required: true, message: "请选择姓别", trigger: "change" }
        ],
        date: [
          { type: "date", required: true, message: "请选择日期", trigger: "change" }
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
      this.$refs[formName][0].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    delClick(index, item) {
      this.formList.splice(index, 1);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick() {
      this.formList.push({
        name: "",
        sex: "",
        date: ""
      });
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
