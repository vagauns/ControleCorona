<template>
  <div>
    <v-container class="px-0">
      <v-row>
        <v-col cols="12" md="12">
          <v-label>
            <b>Sintomas:</b>
          </v-label>
          <v-checkbox v-for="sintoma in sintomas" :key="sintoma.name" :label="sintoma.name" hide-details></v-checkbox>
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
    data: () => ({
        sintomas: [
            { name: 'Febre' },
            { name: 'Tosse seca' },
            { name: 'Dificuldade para respirar' },
            { name: 'Secreção nasal' },
            { name: 'Dor no corpo' },
            { name: 'Fadiga' }
        ]
    })
}
</script>
