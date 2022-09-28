<template>
  <div>
    <v-container class="px-0">
      <v-row>
        <v-col cols="12" md="12">
          <v-label>
            <b>Sintomas:</b>
          </v-label>
          <v-checkbox
            v-for="sintoma in sintomas"
            :key="sintoma.name"
            :label="sintoma.name"
            hide-details
            v-model="$store.state.pacientes.symptoms" 
            v-bind:value="sintoma.id" 
            v-bind:checked="sintomas.includes(sintoma.id)"
            v-on:change="enviarExame"
          ></v-checkbox>
        </v-col>

        <v-col cols="12" md="12">
          <v-label>
            <b>Viagem ao exterior nos últimos 14 dias:</b>
          </v-label>
          <v-radio-group v-model="$store.state.pacientes.travels" v-on:change="enviarExame">
            <v-radio label="Sim" value="sim"></v-radio>
            <v-radio label="Não" value="nao"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12" md="12">
          <v-label>
            <b>Contato com caso confirmado ou suspeito de Covid19:</b>
          </v-label>
          <v-radio-group v-model="$store.state.pacientes.contacts" v-on:change="enviarExame">
            <v-radio label="Sim" value="sim"></v-radio>
            <v-radio label="Não" value="nao"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12" md="12">
          <v-label>
            <b>Grupo de risco:</b>
          </v-label>
          <v-checkbox
            v-for="risco in riscos"
            :key="risco.name"
            :label="risco.name"
            hide-details
            v-model="$store.state.pacientes.deseases" 
            v-bind:value="risco.id" 
            v-bind:checked="riscos.includes(risco.id)"
            v-on:change="enviarExame"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    exame: {
      symptoms: [],
      deseases: []
    },
    sintomas: [
      { name: "Febre", id: 1 },
      { name: "Tosse seca", id: 2 },
      { name: "Dificuldade para respirar", id: 3 },
      { name: "Secreção nasal", id: 4 },
      { name: "Dor no corpo", id: 5 },
      { name: "Fadiga", id: 6 },
    ],
    riscos: [
      {id: 1, name: "Doença Cardiaca"},
      {id: 2, name: "Doença Pulmonar"},
      {id: 3, name: "Diabetes"},
      {id: 4, name: "DPOC"},
      {id: 5, name: "Insuficiência Renal"},
      {id: 6, name: "Doença hepática"},
      {id: 7, name: "Oncologia"},
      {id: 8, name: "Hipertençnao"},
      {id: 9, name: "Cancer"},
      {id: 10, name: "Nenhuma das Opções"},
    ]
  }),
  methods: {
    enviarExame() {
      this.$emit('exame', this.exame)
    } 
  },
  created: function() {
    this.exame.symptoms = this.$store.state.pacientes.symptoms
    this.exame.travels = this.$store.state.pacientes.travels
    this.exame.contacts = this.$store.state.pacientes.contacts
    this.exame.deseases = this.$store.state.pacientes.deseases
  }
}
</script>
