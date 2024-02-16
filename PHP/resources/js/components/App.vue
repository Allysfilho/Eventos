<template>
    <v-app>
        <Sidebar :isOpen="isDrawerOpen"/>

        <Navbar @toggle-drawer="toggleDrawer"/>

        <Dashboard/>
    </v-app>
</template>

<script>
import Dashboard from './DashboardComponent.vue';
import Navbar from './NavbarComponent.vue';
import Sidebar from './SidebarComponent.vue';

export default {
    components: {
        Dashboard,
        Navbar,
        Sidebar,
    },
    data: () => ({
      open: ['Users'],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      isDrawerOpen: false
    }),
    methods: {
        toggleDrawer() {
            this.isDrawerOpen = !this.isDrawerOpen;
        }
    }
  }
  </script>
