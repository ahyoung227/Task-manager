<template>
  <div class="Dashboard ma-16">
    <!-- Search bar -->
    <v-row justify="end">
      <v-col cols="4">
        <v-text-field
          append-icon="mic"
          flat
          hide-details
          label="Search"
          prepend-inner-icon="mdi-magnify"
          solo-inverted
        ></v-text-field>
      </v-col>
    </v-row>
    <Tasksetscreation />

    <v-row>
      <v-col class="d-inline-flex flex-wrap justify-space-between">
        <cards class="mx-2" v-for="n in 5" :key="n"></cards>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import cards from "@/components/DashboardCards.vue";
import Tasksetscreation from "../components/Tasksetscreation";

export default {
  components: {
    cards,
    Tasksetscreation
  },
  mounted() {
    console.log(this.$vuetify.breakpoint);
  },
  data() {
    return {
      items: [{ title: "Clone/Copy" }, { title: "Unsubscribe" }],
      published: true
    };
  }
};
</script>
