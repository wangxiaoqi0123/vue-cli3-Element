// 入职银行卡搜索组件
<template>
  <div class="search-bank">
    <el-input placeholder="请输入内容" v-model="modelBank.BANKA" class="input-with-select">
      <el-button class="btn" slot="append" icon="el-icon-search" @click="dialogVisible = true" />
    </el-input>

    <el-dialog title="银行搜索" :visible.sync="dialogVisible" width="740px" center>
      <div class="header">
        <span class="search-label">银行名称</span>
        <el-input placeholder="银行名称 例如：建设银行*大沙头" v-model="search" />
        <el-button type="primary" icon="el-icon-search" class="search-btn" @click="onSearch" />
      </div>
      <div class="main">
        <el-table
          :data="searchData"
          style="width: 100%"
          size="mini"
          @row-click="rowSelect"
          :row-class-name="tableRowClassName"
          highlight-current-row
        >
          <el-table-column prop="BANKS" label="国家代码" width="100"></el-table-column>
          <el-table-column prop="BANKL" label="银行编号" width="140"></el-table-column>
          <el-table-column prop="BANKA" label="银行名称"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { InformationCollection } from "@/api";
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    bank: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      dialogVisible: false,
      searchData: [],
      search: ""
    };
  },
  computed: {
    modelValve: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      }
    },
    modelBank: {
      get() {
        return this.bank;
      },
      set(newVal) {
        this.$emit("update:bank", newVal);
      }
    }
  },
  watch: {},
  mounted() { },
  methods: {
    // 掉接口获取表单信息
    async onSearch() {
      try {
        const res = await InformationCollection.bankQuery();
        let { result } = res;
        this.searchData = result;
      } catch (error) {

      }
    },
    // 选中当前行操作
    rowSelect(row) {
      this.modelBank = row;
      this.modelValve = row.BANKL;
      this.dialogVisible = false;
    },
    // 选中当前行高亮
    tableRowClassName({ row, rowIndex }) {
      if (row.BANKL === this.modelBank.BANKL) {
        return "current-row";
      }
      return "";
    }
  }
};
</script>
<style lang='less' scoped>
.input-with-select {
  /deep/ & > input {
    height: 34px;
    line-height: 34px;
  }
  height: 34px;
  line-height: 34px;
  margin-top: 3px;
}
/deep/ .el-input-group__append {
  height: 32px;
  line-height: 32px;
  box-sizing: border-box;
  width: 34px;
  padding: 0;
  margin: 0;
  background-color: #fff;
  .btn {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: none;
    padding: 0;
    margin: 0;

    .el-icon-search {
      color: #f29b38;
      font-weight: 700;
    }
  }
}
.search-bank {
  display: inline-block;
  line-height: 40px;
}
/deep/ .el-dialog {
  .el-dialog__header {
    padding: 5px 20px;
    .el-dialog__headerbtn {
      top: 14px;
    }
  }

  .el-dialog__body {
    // padding-top: 0;
    padding: 0;
  }
}
.header {
  padding: 10px 20px;
  .search-label {
    font-weight: 500;
    font-size: 13px;
    height: 32px;
    line-height: 32px;
    margin-right: 10px;
    margin-left: 8px;
    color: #3e3e3e;
  }
  .search-btn {
    background-color: #f29b38;
    border-color: #f29b38;
    height: 32px;
    line-height: 32px;
    margin: 0;
    padding: 0 16px;
    margin-left: 10px;
    border: none;
  }
  .el-input {
    height: 32px;
    line-height: 32px;
    /deep/ & > input {
      height: 32px;
      line-height: 32px;
    }
    // width: calc(~"100% - 70px");
    width: 360px;
  }
}
.main {
  max-height: 56vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  padding-top: 0;

  /deep/ .el-table__header-wrapper {
    // background-color: #ddd;
    .has-gutter {
      & > tr {
        background-color: none;
        height: 30px;
        line-height: 30px;
      }
    }
  }
  /deep/ .el-table__row {
    cursor: pointer;
  }
}
/deep/ .el-table__body tr.current-row > td {
  background-color: #f29b38 !important;
  color: #fff;
}
/deep/ .el-table tbody tr:hover > td {
  background-color: #ffba6c !important;
  color: #fff;
}
</style>
