<template>
  <div>
    <v-container class="px-0" fluid>
      <v-row>
        <v-col
          cols="12"
          md="12"
          class="d-flex justify-center align-center flex-column"
        >
          <div
            class="bg-secondary rounded-circle d-flex justify-center align-center"
            id="showIcon"
            size="150"
          >
            <v-icon icon="mdi-plus-outline" color="white" size="80"></v-icon>
          </div>
          <h2>Status</h2>
          <p>aviso</p>
        </v-col>
        <v-col cols="12" md="12">
          <v-list :items="items" item-title="name" item-value="id"></v-list>
        </v-col>

        <v-col cols="12" md="12" class="text-center">
          <v-btn flat color="secondary" v-on:click="submitForm()" >Confirmar Valores</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Item #1",
        id: 1,
      },
      {
        name: "Item #2",
        id: 2,
      },
      {
        name: "Item #3",
        id: 3,
      },
    ],
  }),
  methods: {
    submitForm() {
      this.$emit('submit')
    } 
  }
}
</script>

<style scoped>
#showIcon {
  width: fit-content;
}
</style>
