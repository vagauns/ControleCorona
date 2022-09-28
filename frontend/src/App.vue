<template>
  <v-app id="inspire">
    <v-app-bar class="bg-green-darken-3">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <b>Controle Covid19</b>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      style="padding: 0; text-align: left"
    >
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="Alex Sandro Morais"
          subtitle="Fiscal da Saúde"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Pacientes"
          value="pacientes"
          to="/"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-file-document-edit-outline"
          title="Exames"
          value="exames"
          to="/exames"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-white-lighten-2">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <div
      class="d-flex justify-end align-end flex-column flex-md-row pa-5"
    >
      <v-btn color="warning" icon="mdi-plus" to="/register"></v-btn>
    </div>
  </v-app>
</template>

<script lang="ts">
export default {
  data: () => ({
    drawer: null,
  }),
}
</script>

<style>

</style>
