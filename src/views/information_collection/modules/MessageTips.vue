<template>
  <div v-show="value" class="vue-shodow-box">
    <div class="vicp-wrap">
      <div class="view-box">
        <div class="header">提示</div>
        <div class="main">
          <div class="box">
            <div class="modal-body alert alert-warning">
              <p style="text-align: center;font-size: 14px;font-weight: bold;">个人信息采集及使用授权条款</p>
              <p>各位领导，同事，您好：</p>
              <p>&emsp;&emsp;由于用工管理需要，公司需要收集您的必要信息，包括但不限于：姓名、年龄、婚育情况、通讯地址、联系电话、电子邮箱地址、教育经历、工作经历、家庭成员信息、工作日志、在公司系统填写上传的信息以及其他用工管理所必要的信息。为了保障您的合法权益，请您仔细阅读以下条款。请您确认并同意以下条款：</p>
              <p>&emsp;&emsp;1、您承诺并确认您在线填写的信息均真实、完整、准确、有效。</p>
              <p>&emsp;&emsp;2、您同意公司根据合法、正当、必要、谨慎的原则保存、查询和使用前述信息。</p>
              <p>&emsp;&emsp;3、您同意公司可在遵守法律法规的规定的情况下，将收集的信息用于公司经营、用工管理等用途。若公司超出前述用途使用您的信息，将征得您的同意。</p>
              <p>&emsp;&emsp;4、您确认公司依照法律规定将对上述信息提供相应的安全保障，以防止信息的丢失、不当使用、未经授权访问或披露。</p>
            </div>
          </div>
        </div>
        <div class="footer">
          <el-button type="primary" class="foo-btn" @click="close" round>本人已阅读并同意上述条款内容</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true
    };
  },
  mounted() {
    // document.body.appendChild(this.$el);
  },
  methods: {
    // 关闭控件
    close() {
      this.value = false;
    }
  }
};
</script>

<style lang="less" scoped>
@-webkit-keyframes vicp {
  0% {
    top: 10%;
  }
  100% {
    top: 50%;
  }
}
@keyframes vicp {
  0% {
    top: 10%;
  }
  100% {
    top: 50%;
  }
}
.vue-shodow-box {
  position: fixed;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 10000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
}
.vue-shodow-box .vicp-wrap {
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
  position: absolute;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 10000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  width: 826px;
  min-height: 340px;
  background-color: #fff;
  border-radius: 5px;
  -webkit-animation: vicp 0.3s ease-in;
  animation: vicp 0.3s ease-in;
}

.header,
.footer {
  height: 30px;
  padding: 15px;
}

.header {
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
}

.footer {
  text-align: right;
}

.main {
  min-height: 220px;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  box-shadow: border-box;
  padding: 15px;
  background-color: #fbf8e5;
}
.foo-btn {
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  margin: 0;
  background-color: #eda04b;
  border-color: #eda04b;
}
.alert > p + p {
  margin-top: 5px;
}
.alert > p,
.alert > ul {
  margin-bottom: 0;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
  line-height: 1.42857143;
  font-family: "Microsoft Yahei";
  font-size: 12px;
  font-weight: 400;
}
</style>
