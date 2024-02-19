<template>
    <v-app>
        <Sidebar :isOpen="isDrawerOpen"/>

        <Navbar @toggle-drawer="toggleDrawer"/>

        <router-view></router-view>
    </v-app>
</template>

<script>
// Importando componentes
import Dashboard from './DashboardComponent.vue';
import Navbar from './NavbarComponent.vue';
import Sidebar from './SidebarComponent.vue';
import Users from './UsersComponent.vue';

// Importando o router do vue
import { useRoute } from 'vue-router';

export default {
    components: {
        Dashboard,
        Navbar,
        Sidebar,
        Users,
    },
    setup() {
    // Use o Vue Router para acessar informações sobre a rota atual
    const route = useRoute();

    console.log(route.path);
    },
    data: () => ({
      isDrawerOpen: false
    }),
    methods: {
        toggleDrawer() {
            this.isDrawerOpen = !this.isDrawerOpen;
        }
    }
  }
  </script>
