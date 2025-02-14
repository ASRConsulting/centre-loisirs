import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AccueilCentre from '../pages/AccueilCentre.vue';
import ConnexionAdmin from '../pages/ConnexionAdmin.vue';
import TableauBordAdmin from '../pages/TableauBordAdmin.vue';

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: AccueilCentre },
  { path: "/connexionAdmin", component: ConnexionAdmin },
  { path: "/admin", component: TableauBordAdmin, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
