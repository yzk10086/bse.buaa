import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
//import TSNE from '../views/TSNE.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/main/manager",
        name: "Manager",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Manager.vue"),
      },
      {
        path: "/main/views",
        name: "Views",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Views.vue"),
      },
      {
        path: "/main/statistics",
        name: "Views",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Statistics.vue"),
      }
    ],
  },
  {
    path: "/pca",
    name: "pca",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ml_PCA.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/test.vue"),
  },
  {
    path: "/violinplot1",
    name: "violinplot1",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SepalLength.vue"),
  },
  {
    path: "/violinplot2",
    name: "violinplot2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SepalWidth.vue"),
  },
  {
    path: "/violinplot3",
    name: "violinplot3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PetalLength.vue"),
  },
  {
    path: "/violinplot4",
    name: "violinplot4",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PetalWidth.vue"),
  },
  {
    path: "/tsne",
    name: "tsne",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TSNE.vue"),
    //component:TSNE
  },
  {
    path: "/pca_3d",
    name: "pca_3d",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PCA_3d.vue"),
  },
  {
    path: "/tsne_3d",
    name: "tsne_3d",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TSNE_3d.vue"),
  },
  {
    path: "/variance_venue",
    name: "variance_venue",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Variance_venue.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
