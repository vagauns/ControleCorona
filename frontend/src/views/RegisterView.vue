<template>
  <div class="register">
    <v-card
      class="mx-auto"
      max-width="none"
      style="border: none; box-shadow: none"
    >
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <!-- <v-avatar color="primary" size="24" v-text="step"></v-avatar> -->
      </v-card-title>
      <v-window v-model="step">
        <v-window-item :value="1">
          <IdentificacaoComponent
            v-on:identificacao="setIdentificacao($event)"
          />
        </v-window-item>

        <v-window-item :value="2">
          <ExameComponent v-on:exame="setIdentificacao($event)" />
        </v-window-item>

        <v-window-item :value="3">
          <FeedbackComponent v-on:submit="submitForm()" />
        </v-window-item>
      </v-window>

      <v-card-actions>
        <div>
          <v-btn color="warning" flat v-if="step > 1" @click="step--">
            Back
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-btn v-if="step < 3" flat color="primary" depressed @click="step++">
          Next
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import IdentificacaoComponent from "../components/register/IdentificacaoComponent.vue"
import FeedbackComponent from "../components/register/FeedbackComponent.vue"
import ExameComponent from "../components/register/ExameComponent.vue"
export default {
  name: "RegisterView",
  props: ['pacienteId'],
  components: {
    ExameComponent,
    IdentificacaoComponent,
    FeedbackComponent,
  },
  data: () => ({
    step: 1,
    pacientes: {},
  }),
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Identificação"
        case 2:
          return "Exames"
        default:
          return "Feedback"
      }
    },
  },
  created: function() {
    if(this.pacienteId){
      this.$store.commit("getPaciente", this.pacienteId);
    }
  },
  methods: {
    submitForm() {
      if(this.pacienteId){

        var update = {
          ...this.$store.state.pacientes,
          ...{ id: this.pacienteId }
        }
        this.$store.commit('editPaciente', update)
      } else {
        this.$store.commit('addPaciente', this.$store.state.pacientes)
      }
      window.location.href = "/"
    },
  },
}
</script>
