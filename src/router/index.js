import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ChangeLogView from '@/views/ChangeLogView.vue'
import AppScreenshots from '@/views/AppScreenshotsView.vue'

import ArticleMenu from '@/views/ArticleMenuView.vue'
import Article from '@/views/ArticleView.vue'
import ArticleCreation from '@/views/ArticleCreationView.vue'

import LoginView from '@/views/LoginView.vue'

import TempView from '@/views/Temp.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { requiresAuth: true }},

  { path: '/articles', name: 'article-menu', component: ArticleMenu, meta: { requiresAuth: true }},
  { path: '/articles/:id', name: 'article', component: Article, meta: { requiresAuth: true }},
  { path: '/article-creation', name: 'article-creation', component: ArticleCreation, meta: { requiresAuth: true }},

  { path: '/change-log', name: 'changelog', component: ChangeLogView, meta: { requiresAuth: true }},
  { path: '/screenshots', name: 'screenshots', component: AppScreenshots, meta: { requiresAuth: true }},
  
  { path: '/login', name:'Login', component: LoginView},

  { path: '/temp', name: 'temp', component: TempView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const app = router.app;

  const isAuthenticated = !!app.config.globalProperties.$authState.isAuthenticated;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router
