import './bootstrap';
import { createApp } from 'vue';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/dist/vuetify.min.css';

import '@mdi/font/css/materialdesignicons.min.css';

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp({});

import App from './components/App.vue';
import DashboardComponent from './components/DashboardComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';

app
    .component('app', App)
    .component('dashboard-component', DashboardComponent)
    .component('navbar-component', NavbarComponent)
    .component('sidebar-component', SidebarComponent);

app.use(vuetify).mount('#app');
