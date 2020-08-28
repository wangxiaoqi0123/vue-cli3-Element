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
  },
  {
    path: "/form_component",
    name: "form_component页面",
    meta: {
      title: "form_component",
      roles: ["admin", "ASYNC"]
    },
    component: () => import("@/views/test/children/form_component/index")
  },
  {
    path: "/dialog",
    name: "dialog页面",
    meta: {
      title: "dialog",
      roles: ["admin", "ASYNC"]
    },
    component: () => import("@/views/test/children/dialog/index")
  }
];
export default testChildren;
