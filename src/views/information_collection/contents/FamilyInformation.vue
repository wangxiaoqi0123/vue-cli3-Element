<template>
  <div class="form-box">
    <div class="form-tips-title">
      <p>说明：</p>
      <p>&emsp;&emsp;1、填写范围：</p>
      <p>&emsp;&emsp;&emsp;&emsp;1）若您是公司员工，请填写父母、配偶及子女信息；</p>
      <p>&emsp;&emsp;&emsp;&emsp;2）若您是职业经理人（各级中高层），请您按干部管理要求，填写配偶、子女、子女配偶、父母、 配偶父母的信息（若已离婚，请您填写父母、前配偶、子女及子女配偶信息，若三代以内有在省部级以上机关单位任职的亲属也请填写）；</p>
      <p>&emsp;&emsp;2、工作单位及职务填写范例：</p>
      <p>&emsp;&emsp;&emsp;&emsp;请填写具体工作单位及职务（学生请填就读学校和专业，上小学前的子女请填写学龄前儿童），如无具体工作单位和职务，请填写**省**市**县**镇居民；</p>
      <p>&emsp;&emsp;&emsp;&emsp;公司中层以上干部若有配偶或子女取得国境外居留权或国籍的情况请在职务一栏注明（****年**月取得**国国籍/居留权）。</p>
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
        <el-form-item label="关系类型" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择关系类型" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="姓名">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="英文名">
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

        <el-form-item label="性别" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择性别" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

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

        <el-form-item label="国家/地区" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择国家/地区" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否在越秀任职" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择是否在越秀任职" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态（非必选）" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择状态（非必选）" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="工作（学习）单位">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="职务">
          <el-input v-model="formData.firstName" class="form-inp" />
        </el-form-item>

        <el-form-item label="证件类型" prop="name">
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

        <el-form-item label="是否移居国（境）外" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择是否移居国（境）外" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否紧急联系人" prop="name">
          <el-select v-model="formData.countryBirth" placeholder="请选择是否紧急联系人" class="form-sel">
            <el-option
              v-for="item in sexList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="电话号码">
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
