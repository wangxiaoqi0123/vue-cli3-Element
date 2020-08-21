
// Form表单单独提交一条form表单数据
let submitForm = {
  status: 200,
  message: "success",
  results: {
    // SAP 的数据
    SAP: [],
    data: {
      // key:value
      name: ""
    }
  }
};

// 获取表单权限
let getPermissionForm = {
  status: 200,
  message: "success",
  data: {
    name_show: true, // 字段显示隐藏 true显示 / false不显示
    name_required: "name" // 字段显示隐藏 key必填 / ""不必填
  }
};

/**
 * 下拉选获取方式
 *
 * 1.部分无关联列表直接初始化获取
 * 2.联动列表掉接口实现
 */

export default {
  "post|/submit/form": submitForm,
  "get|/getPermissionForm/form": getPermissionForm
};
