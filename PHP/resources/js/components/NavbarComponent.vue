<template>
    <v-app-bar flat class="border-b">
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Eventos</v-app-bar-title>
        <template #append>

          <v-btn icon class="mr-2">
            <v-badge dot color="info">
              <v-icon icon="mdi-bell-outline"></v-icon>
            </v-badge>
          </v-btn>
          <v-menu>
            <template #activator="{ props }">
              <v-btn icon v-bind="props">
                <v-icon icon="mdi-account"></v-icon>
              </v-btn>
            </template>
            <v-card min-width="200px">
              <v-list :lines="false" density="compact" nav>

                <v-list-item prepend-icon="mdi-account-outline">
                  <v-list-item-title>Meu perfil</v-list-item-title>
                </v-list-item>

                <v-list-item prepend-icon="mdi-heart-outline">
                  <v-list-item-title>Favoritos</v-list-item-title>
                </v-list-item>

              </v-list>
            </v-card>
          </v-menu>
        </template>
      </v-app-bar>
</template>

<script>
    export default {
        methods: {
            toggleDrawer() {
                this.$emit('toggle-drawer');
            }
        }
    }
</script>
