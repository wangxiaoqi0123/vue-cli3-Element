let demoList = {
  status: 200,
  message: "success",
  data: {
    total: 100,
    "rows|10": [{
      id: "@guid",
      name: "@cname",
      "age|20-30": 23,
      "job|1": ["前端工程师", "后端工程师", "UI工程师", "需求工程师"]
    }]
  }
};

// Form表单单独提交一条form表单数据
let submitForm = {
  status: 200,
  message: "success",
  data: {
    // SAP 的数据
    SAP: [],
    data: {
      // key:value
      name: ""
    }
  }
};

//
let getPermissionForm = {
  status: 200,
  message: "success",
  data: {
    SAP: [],
    data: {
      // key:value
      name: ""
    }
  }
};

export default {
  "get|/parameter/query": demoList,
  "get|/submit/query": submitForm,
  "get|/getPermissionForm/query": getPermissionForm
};
