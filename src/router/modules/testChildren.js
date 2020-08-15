const testChildren = [
  {
    path: "/form",
    name: "测试表单页面",
    meta: {
      title: "form",
      roles: ["admin", "TEST"]
    },
    component: () => import("@/views/test/children/form/index")
  },
  {
    path: "/tabs",
    name: "tabs页面",
    meta: {
      title: "tabs",
      roles: ["admin", "ASYNC"]
    },
    component: () => import("@/views/test/children/tabs/index")
  }
];
export default testChildren;
