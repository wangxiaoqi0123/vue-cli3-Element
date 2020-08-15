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
        <div class="avatar-box">
          <div class="avatar-img">头像</div>
          <div class="avatar-tips">（上传要求：格式为JPG，小于1MB的照片）</div>
        </div>

        <el-form-item label="员工编号">
          <el-input v-model="formData.userId" class="form-inp" :readonly="true" />
        </el-form-item>

        <el-form-item label="英文名">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="姓">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="姓/拼音">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="名">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="名/拼音">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="出生日期" required>
          <el-date-picker
            type="date"
            class="form-date"
            placeholder="选择日期"
            v-model="formData.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-select v-model="formData.sex" placeholder="请选择性别" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="出生国家/地区" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择出生国家/地区" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="国籍" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择国籍" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="血型" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择血型" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="健康状况" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择健康状况" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="婚姻状况" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择婚姻状况" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="民族" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择民族" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="籍贯所在省" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择籍贯所在省" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="籍贯所在市" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择籍贯所在市" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="籍贯所区/县" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择籍贯所区/县" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="出生省份" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择出生省份" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="出生市" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择出生市" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="出生区/县" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择出生区/县" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="户口类型" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择户口类型" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否公司集体户口" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择是否公司集体户口" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="进入越秀集团日期" required>
          <el-date-picker
            type="date"
            class="form-date"
            placeholder="选择日期"
            v-model="formData.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="进入本公司日期" required>
          <el-date-picker
            type="date"
            class="form-date"
            placeholder="选择日期"
            v-model="formData.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="参加工作日期" required>
          <el-date-picker
            type="date"
            class="form-date"
            placeholder="选择日期"
            v-model="formData.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="本人是否独生子女" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择本人是否独生子女" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="子女数目">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="手机">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="公司邮箱">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <div>
          <el-form-item label="进入本板块日期" required>
            <el-date-picker
              type="date"
              class="form-date"
              placeholder="选择日期"
              v-model="formData.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <div class="form-inp-tips">说明：集团总部员工请填写进入集团总部日期</div>
        </div>

        <div>
          <el-form-item label="个人专长">
            <el-input v-model="formData.firstName" class="form-inp" />
          </el-form-item>
          <div class="form-inp-tips">说明：个人专长请填写您所熟悉的工作业务及专长，如经营管理、党建管理等</div>
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
</style>
