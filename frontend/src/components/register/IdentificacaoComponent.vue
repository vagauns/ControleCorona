<template>
  <div>
    <v-container class="px-0">
      <v-row>
        <v-col cols="12" md="12">
          <v-label>
            <b>Tipo de Pessoa:</b>
          </v-label>
          <v-radio-group>
            <v-radio
              v-for="type in types"
              :key="type.value"
              :label="type.name"
              :value="type.value"
            ></v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field label="CPF:"></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field label="Nome:"></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-label>
            <b>Testado:</b>
          </v-label>
          <v-radio-group>
            <v-radio label="Sim" value="sim"></v-radio>
            <v-radio label="Não" value="nao"></v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12" md="12">
          <v-label>
            <b>Resultado do Teste:</b>
          </v-label>
          <v-radio-group>
            <v-radio label="Positivo" value="positivo"></v-radio>
            <v-radio label="Negativo" value="negativo"></v-radio>
            <v-radio label="Inconclusivo" value="inconclusivo"></v-radio>
          </v-radio-group>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "IdentificacaoComponent",
  data: () => ({
    types: [
      { name: "Paciente", value: "paciente" },
      { name: "Familiar", value: "familiar" },
      { name: "Profissional Saúde", value: "profissional" },
    ],
  }),
}
</script>
