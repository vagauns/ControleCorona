<template>
  <div class="home">
    <v-list lines="two" class="text-left">
      <v-list-item
        v-for="paciente in $store.state.pacientes"
        :key="paciente.id"
        :title="paciente.name"
        :subtitle="`${paciente.type}  ${paciente.result}`"
      >
        <template v-slot:prepend>
          <v-avatar color="info">
            <v-icon icon="mdi-newspaper-variant-outline"></v-icon>
          </v-avatar>
        </template>

        <template v-slot:append>
          <v-btn
            color="red-darken-1"
            icon="mdi-delete"
            variant="text"
            v-on:click="deletePaciente(paciente.id)"
          ></v-btn>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-chevron-right"
            variant="text"
            :to="`/edit/${paciente.id}`"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  created() {
    this.$store.commit("getPacientes");
  },
  methods: {
    deletePaciente(id) {
      this.$store.commit("deletePaciente", id)
    }
  }
}
</script>
