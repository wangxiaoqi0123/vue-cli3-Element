<template>
  <div class="form-box">
    <div class="tips">
      <h1>动态表单校验二：根据后台数据动态动态字段显示/隐藏</h1>
      <p>1. 对应数据配置对应规制</p>
      <p>2. el-form-item(字段) 动态根后台标识v-if</p>
      <p>3. 注意初始化表单</p>
    </div>
    <div class="btn-box">
      <el-button class="form-save-btn" @click="handleClick">随机字段隐藏</el-button>
    </div>
    <el-form
      v-if="flag"
      :model="formData"
      :rules="rules"
      :inline="true"
      ref="formData"
      label-width="100px"
      class="form-content"
    >
      <div class="form-align3">
        <el-form-item label="姓名" :prop="required.name" v-if="showForm.name">
          <el-input v-model="formData.name" class="form-inp" />
        </el-form-item>

        <el-form-item label="日期" :prop="required.date" v-if="showForm.date">
          <el-date-picker
            type="date"
            class="form-date"
            placeholder="选择日期"
            v-model="formData.date"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="性别" :prop="required.sex" v-if="showForm.sex">
          <el-select v-model="formData.sex" placeholder="请选择性别" class="form-sel" clearable>
            <el-option
              v-for="item in sexList"
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
    },
    handleClick() {
      let num = Math.ceil(Math.random() * 10);
      if (num > 7) {
        // this.required = {
        //   name: "",
        //   sex: "sex",
        //   date: "date"
        // };
        this.showForm = {
          name: false,
          sex: true,
          date: true
        };
      } else if (num > 5) {
        // this.required = {
        //   name: "name",
        //   sex: "",
        //   date: "date"
        // };
        this.showForm = {
          name: true,
          sex: false,
          date: true
        };
      } else {
        // this.required = {
        //   name: "name",
        //   sex: "sex",
        //   date: ""
        // };
        this.showForm = {
          name: true,
          sex: true,
          date: false
        };
      }
      this.flag = false;
      this.$nextTick(() => {
        this.flag = true;
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
