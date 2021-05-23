import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import TSNE from '../views/TSNE.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/pca',
    name: 'pca',
    component: () => import(/* webpackChunkName: "about" */ '../views/ml_PCA.vue')
  },{
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/test.vue')
  }, {
    path: '/violinplot1',
    name: 'violinplot1',
    component: () => import(/* webpackChunkName: "about" */ '../views/SepalLength.vue')
  },{
    path: '/violinplot2',
    name: 'violinplot2',
    component: () => import(/* webpackChunkName: "about" */ '../views/SepalWidth.vue')
  },{
    path: '/violinplot3',
    name: 'violinplot3',
    component: () => import(/* webpackChunkName: "about" */ '../views/PetalLength.vue')
  },{
    path: '/violinplot4',
    name: 'violinplot4',
    component: () => import(/* webpackChunkName: "about" */ '../views/PetalWidth.vue')
  }, {
    path: '/tsne',
    name: 'tsne',
    component: () => import(/* webpackChunkName: "about" */ '../views/TSNE.vue')
    //component:TSNE
  },{
    path: '/pca_3d',
    name: 'pca_3d',
    component: () => import(/* webpackChunkName: "about" */ '../views/PCA_3d.vue')
  }, {
    path: '/tsne_3d',
    name: 'tsne_3d',
    component: () => import(/* webpackChunkName: "about" */ '../views/TSNE_3d.vue')
  },{
    path: '/pca_3d_author',
    name: 'pca_3d_author',
    component: () => import(/* webpackChunkName: "about" */ '../views/PCA_3d_author.vue')
  },{
    path: '/pca_2d_venue',
    name: 'pca_2d_venue',
    component: () => import(/* webpackChunkName: "about" */ '../views/PCA_2d_venue.vue')
  },{
    path: '/variance_TE',
    name: 'variance_TE',
    component: () => import(/* webpackChunkName: "about" */ '../views/Variance_TE.vue')
  },{
    path: '/variance_TE_10',
    name: 'variance_TE_10',
    component: () => import(/* webpackChunkName: "about" */ '../views/Variance_TE_10.vue')
  },{
    path: '/variance_TE_20',
    name: 'variance_TE_20',
    component: () => import(/* webpackChunkName: "about" */ '../views/Variance_TE_20.vue')
  },{
    path: '/variance_venue',
    name: 'variance_venue',
    component: () => import(/* webpackChunkName: "about" */ '../views/Variance_venue.vue')
  },{
    path: '/tsne_venuegood',
    name: 'tsne_venuegood',
    component: () => import(/* webpackChunkName: "about" */ '../views/TSNE_venue.vue')
  },{
    path: '/tsne_venuebad',
    name: 'tsne_venuebad',
    component: () => import(/* webpackChunkName: "about" */ '../views/TSNE_venuebad.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
