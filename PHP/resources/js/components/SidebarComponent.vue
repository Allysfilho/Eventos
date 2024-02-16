<!-- Sidebar.vue -->
<template>
    <v-navigation-drawer v-model="drawerOpen">
        <v-list v-model:opened="open">
            <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

            <v-list-group value="Users">
                <template v-slot:activator="{ props }">
                <v-list-item
                    v-bind="props"
                    prepend-icon="mdi-account-circle"
                    title="Users"
                ></v-list-item>
                </template>

                <v-list-item
                v-for="([title, icon], i) in admins"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                :value="title"
                ></v-list-item>
            </v-list-group>
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
                ['Management', 'mdi-account-multiple-outline'],
                ['Settings', 'mdi-cog-outline'],
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
