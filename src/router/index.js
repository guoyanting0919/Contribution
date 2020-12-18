import Vue from "vue";
import VueRouter from "vue-router";

// 防止重複點擊相同router噴error
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  /* 首頁 */
  {
    path: "/", //開頭大寫
    name: "Home", //開頭大寫
    component: () => import("../views/Home.vue"),
    meta: {
      title: "首頁", //中文為主 若為英文開頭大寫
      requireAuth: false, //表示是否登入驗證 false 時可省略
      NoNeedHome: true, // 表示不需要父層模板 false 時可省略
    },
  },

  /* 工業污染防治刊物投稿 */
  {
    path: "/Industry",
    name: "Industry",
    component: () => import("../views/Industry"),
    meta: {
      title: "工業污染防治刊物投稿",
      requireAuth: false,
      NoNeedHome: false,
    },
    children: [
      /* 工業污染防治刊物投稿說明頁面 */
      {
        path: "/",
        name: "IndustryDescription",
        component: () => import("../views/Industry/Description.vue"),
        meta: {
          title: "工業污染防治刊物投稿說明頁面",
          requireAuth: false,
          NoNeedHome: false,
        },
      },

      /* 工業污染防治刊物投稿表單頁面 */
      {
        path: "Form",
        name: "IndustryForm",
        component: () => import("../views/Industry/Form.vue"),
        meta: {
          title: "工業污染防治刊物投稿表單頁面",
          requireAuth: false,
          NoNeedHome: false,
        },
      },
    ],
  },

  /* 綠色技術與工程實務論文投稿 */
  {
    path: "/GreenTec",
    name: "GreenTec",
    component: () => import("../views/GreenTec"),
    meta: {
      title: "綠色技術與工程實務論文投稿",
      requireAuth: false,
      NoNeedHome: false,
    },
    children: [
      /* 綠色技術與工程實務論文投稿說明頁面 */
      {
        path: "/",
        name: "GreenTecDescription",
        component: () => import("../views/GreenTec/Description.vue"),
        meta: {
          title: "綠色技術與工程實務論文投稿說明頁面",
          requireAuth: false,
          NoNeedHome: false,
        },
      },

      /* 綠色技術與工程實務論文投稿表單頁面 */
      {
        path: "Form",
        name: "GreenTecForm",
        component: () => import("../views/GreenTec/Form.vue"),
        meta: {
          title: "綠色技術與工程實務論文投稿表單頁面",
          requireAuth: false,
          NoNeedHome: false,
        },
      },
    ],
  },

  /* 進度查詢 */
  {
    path: "/Search",
    name: "Search",
    component: () => import("../views/Search"),
    meta: {
      title: "進度查詢",
      requireAuth: false,
      NoNeedHome: false,
    },
  },

  /* 404頁面 */
  {
    path: "/Err404",
    name: "Err404",
    component: () => import("../views/Err404.vue"),
    meta: {
      title: "404頁面",
      requireAuth: false,
      NoNeedHome: false,
    },
  },

  // 不存在的路由跳轉
  {
    path: "*",
    redirect: "/Err404",
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
