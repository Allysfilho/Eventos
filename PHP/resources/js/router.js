import { createRouter, createWebHashHistory } from 'vue-router';
import DashboardComponent from './components/DashboardComponent.vue';
import UsersComponent from './components/UsersComponent.vue';

const routes = [
  { path: '/', component: DashboardComponent },
  { path: '/users', component: UsersComponent },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
