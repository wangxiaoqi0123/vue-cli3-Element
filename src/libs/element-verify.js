export const checkSort = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("排序码不能为空"));
  }
  setTimeout(() => {
    if (Number.isInteger(value)) {
      if (value.toString().length > 5) {
        callback(new Error("排序码长度限制5位以内"));
      } else {
        callback();
      }
    } else {
      callback(new Error("排序码必须是正整数"));
    }
  });
};
