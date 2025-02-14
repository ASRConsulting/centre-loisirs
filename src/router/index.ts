import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AccueilCentre from '../pages/AccueilCentre.vue';
import ConnexionAdmin from '../pages/ConnexionAdmin.vue';
import TableauBordAdmin from '../pages/TableauBordAdmin.vue';

import Connexion from "@/views/PageConnexion.vue";
import Inscription from "@/views/PageInscription.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: AccueilCentre },
  { path: "/connexionAdmin", component: ConnexionAdmin },
  { path: "/admin", component: TableauBordAdmin, meta: { requiresAuth: true } },

  { path: "/connexion", component: Connexion },
  { path: "/inscription", component: Inscription }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
