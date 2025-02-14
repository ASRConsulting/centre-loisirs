import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AccueilCentre from '../pages/AccueilCentre.vue';

import TableauBordAdmin from '../pages/TableauBordAdmin.vue';
import GestionActivites from "@/views/GestionActivites.vue";

import PageConnexion from "@/views/PageConnexion.vue";
import PageInscription from "@/views/PageInscription.vue";


const routes: Array<RouteRecordRaw> = [
  { path: "/", component: AccueilCentre },

  { path: "/tableauBordAdmin", component: TableauBordAdmin, meta: { requiresAuth: true } },

  { path: "/PageConnexion", component: PageConnexion },
  { path: "/PageInscription", component: PageInscription},

  { path: "/GestionActivites", component: GestionActivites }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
