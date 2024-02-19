import './bootstrap';
import { createApp } from 'vue';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css';

const vuetify = createVuetify({
  components,
  directives
})

// Material design
import '@mdi/font/css/materialdesignicons.min.css';

const app = createApp({});

import App from './components/App.vue';
import DashboardComponent from './components/DashboardComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import UsersComponent from './components/UsersComponent.vue';

import router from './router'; // Importe o arquivo de configuração do roteador

app
    .component('app', App)
    .component('dashboard-component', DashboardComponent)
    .component('navbar-component', NavbarComponent)
    .component('sidebar-component', SidebarComponent)
    .component('users-component', UsersComponent);

app
    .use(vuetify)
    .use(router)
    .mount('#app');
