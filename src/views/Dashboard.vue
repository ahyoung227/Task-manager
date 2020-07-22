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

    <v-row>
      <v-col class="d-flex flex-wrap justify-space-between">
        <cards v-for="n in 5" :key="n" class="ma-2"></cards>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import cards from "@/components/DashboardCards";

export default {
  components: {
    cards
  },
  mounted() {
    console.log(this.$vuetify.breakpoint);
  },
  data() {
    return {
      tasks: [
        { date: "JUN 03", title: "Submit IP proposal" },
        { date: "JUL 15", title: "Submit first complete draft" },
        { date: "AUG 30", title: "Get advisor signature" }
      ]
    };
  }
};
</script>
