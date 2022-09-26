<template>
  <div class="home">
    <v-list lines="two" class="text-left">
      <v-list-item
        v-for="file in files"
        :key="file.title"
        :title="file.title"
        :subtitle="file.subtitle"
      >
        <template v-slot:prepend>
          <v-avatar :color="file.color">
            <v-icon color="green">{{ file.icon }}</v-icon>
          </v-avatar>
        </template>

        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-chevron-right"
            variant="text"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    files: [
      {
        color: "blue",
        icon: "mdi-text-box-outline",
        subtitle: "Jan 20, 2014",
        title: "Vacation itinerary",
      },
      {
        color: "amber",
        icon: "mdi-text-box-outline",
        subtitle: "Jan 10, 2014",
        title: "Kitchen remodel",
      },
    ],
  }),
}
</script>
