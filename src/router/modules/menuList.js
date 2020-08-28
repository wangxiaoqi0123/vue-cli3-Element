const menuList = [
  {
    path: "/announcements",
    name: "通知提醒",
    meta: {
      title: "announcements",
      roles: ["admin", "TEST"]
    },
    component: () => import("@/views/todolist/announcements/index")
  },
  {
    path: "/proceed",
    name: "代办事项",
    meta: {
      title: "proceed",
      roles: ["admin", "TEST"]
    },
    component: () => import("@/views/todolist/proceed/index")
  },
  {
    path: "/myapply",
    name: "我的发起",
    meta: {
      title: "proceed",
      roles: ["admin", "TEST"]
    },
    component: () => import("@/views/todolist/myapply/index")
  }
];

export default menuList;
