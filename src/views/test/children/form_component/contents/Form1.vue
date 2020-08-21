<template>
  <div class="form-box">
    <div class="tips">
      <h1>表单组件一：动态下拉选</h1>
      <p>远程搜索下拉选:需要根据remote-method 添加获取数据与搜索过滤的方法</p>
      <p>远程下拉选:@focus 添加获取数据的方法</p>
      <p>树型下拉选:树型下拉选本质上是一个非input类型的输入框，所以校验需要手动清除（根据表单自带的方法 clearValidate）</p>
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
        <el-form-item label="远程搜索下拉选" prop="value1">
          <el-select
            v-model="formData.value1"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading"
            class="form-sel"
          >
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="远程下拉选" prop="value2">
          <el-select
            v-model="formData.value2"
            clearable
            placeholder="请选择"
            @focus="remoteList"
            class="form-sel"
            :loading="loading2"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="树型下拉选" prop="value3">
          <treeselect
            v-model="formData.value3"
            placeholder="树型下拉选"
            :options="options3"
            class="form-sel"
            @select="clearVerify('formData','value3')"
          />
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
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  components: {
    Treeselect
  },
  data() {
    return {
      formData: {
        value1: "",
        value2: "",
        value3: undefined
      },
      loading: false,
      loading2: false,
      options1: [],
      options2: [],
      options3: [{
        "children": [
          {
            "children": [
              {
                "children": "",
                "createTime": "2020-04-12 11:34:35",
                "enabled": true,
                "hierarchy": "23",
                "id": "40000029",
                "label": "华北区域",
                "name": "华北区域",
                "pid": "30000002",
                "setChildren": false
              },
              {
                "children": "",
                "createTime": "2020-04-12 11:34:35",
                "enabled": true,
                "hierarchy": "23",
                "id": "40000030",
                "label": "西部区域",
                "name": "西部区域",
                "pid": "30000002",
                "setChildren": false
              },
              {
                "children": "",
                "createTime": "2020-04-12 11:34:35",
                "enabled": true,
                "hierarchy": "23",
                "id": "40000031",
                "label": "华东区域",
                "name": "华东区域",
                "pid": "30000002",
                "setChildren": false
              },
              {
                "children": "",
                "createTime": "2020-04-12 11:34:35",
                "enabled": true,
                "hierarchy": "23",
                "id": "40000032",
                "label": "粤东区域",
                "name": "粤东区域",
                "pid": "30000002",
                "setChildren": false
              },
              {
                "children": "",
                "createTime": "2020-04-12 11:34:35",
                "enabled": true,
                "hierarchy": "23",
                "id": "40000033",
                "label": "粤西区域",
                "name": "粤西区域",
                "pid": "30000002",
                "setChildren": false
              },
              {
                "children": "",
                "createTime": "2020-04-12 11:34:35",
                "enabled": true,
                "hierarchy": "23",
                "id": "40000152",
                "label": "中部区域",
                "name": "中部区域",
                "pid": "30000002",
                "setChildren": false
              }
            ],
            "createTime": "2020-04-12 11:31:36",
            "enabled": true,
            "hierarchy": "22",
            "id": "30000002",
            "label": "政府事务部",
            "name": "政府事务部",
            "pid": "20000002",
            "setChildren": false
          },
          {
            "children": [
              {
                "children": "",
                "createTime": "2020-04-12 11:34:35",
                "enabled": true,
                "hierarchy": "23",
                "id": "40000153",
                "label": "媒体内容及危机",
                "name": "媒体内容及危机",
                "pid": "30000010",
                "setChildren": false
              },
              {
                "children": "",
                "createTime": "2020-04-12 11:34:35",
                "enabled": true,
                "hierarchy": "23",
                "id": "40000154",
                "label": "企业社会责任及财经传播",
                "name": "企业社会责任及财经传播",
                "pid": "30000010",
                "setChildren": false
              },
              {
                "children": "",
                "createTime": "2020-04-12 11:34:35",
                "enabled": true,
                "hierarchy": "23",
                "id": "40000155",
                "label": "项目策划及海外",
                "name": "项目策划及海外",
                "pid": "30000010",
                "setChildren": false
              }
            ],
            "createTime": "2020-04-12 11:31:36",
            "enabled": true,
            "hierarchy": "22",
            "id": "30000010",
            "label": "媒体公关部",
            "name": "媒体公关部",
            "pid": "20000002",
            "setChildren": false
          }
        ],
        "createTime": "2020-04-12 11:27:58",
        "enabled": true,
        "hierarchy": "21",
        "id": "20000002",
        "label": "公共关系中心",
        "name": "公共关系中心",
        "pid": "10000003",
        "setChildren": false
      }],
      list: [],
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
      }
    };
  },
  methods: {
    // 校验整个表单
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
    // 清楚整个表单的校验
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 远程搜索数据方法
    remoteMethod(query) {
      // if (query !== "") {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.list = [{
          value: "Beijing",
          label: "北京"
        }, {
          value: "Shanghai",
          label: "上海"
        }, {
          value: "Nanjing",
          label: "南京"
        }, {
          value: "Chengdu",
          label: "成都"
        }, {
          value: "Shenzhen",
          label: "深圳"
        }, {
          value: "Guangzhou",
          label: "广州"
        }];
        this.options = this.list.filter(item => {
          return item.label.indexOf(query) > -1;
        });
      }, 2000);
      // } else {
      //   this.options = [];
      // }
    },

    // 远程远程获取数据方法
    remoteList() {
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
        this.list = [{
          value: "Beijing",
          label: "北京"
        }, {
          value: "Shanghai",
          label: "上海"
        }, {
          value: "Nanjing",
          label: "南京"
        }, {
          value: "Chengdu",
          label: "成都"
        }, {
          value: "Shenzhen",
          label: "深圳"
        }, {
          value: "Guangzhou",
          label: "广州"
        }];
        this.options2 = this.list;
      }, 2000);
    },

    // clearValidate清除表单中的某一项校验
    clearVerify(formName, prop) {
      // 单个清楚校验提示
      this.$refs[formName].clearValidate(prop);
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
