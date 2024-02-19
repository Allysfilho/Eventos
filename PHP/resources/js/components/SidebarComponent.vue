<template>
    <v-navigation-drawer v-model="drawerOpen">
        <v-list>
            <v-list-item
                v-for="([title, icon, route], i) in admins"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                :value="title"
                :to="route"
            >
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
    export default {
        props: {
          isOpen: Boolean
        },
        methods: {
            updateIsOpen(newValue) {
                this.$emit('update:isOpen', newValue);
            }
        },
        data: () => ({
            open: ['Users'],
            admins: [
                ['Inicio', 'mdi-home'],
                ['Usuários', 'mdi-account-multiple-outline', '/users'],
                ['Eventos', 'mdi-party-popper', '/'],
            ],
            drawerOpen: false
        }),
        watch: {
            isOpen(newValue) {
                this.drawerOpen = newValue;
            }
        },
    }
</script>
