<template>
  <div class="Dashboard ma-16">
    <v-container fluid>
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
            single-line
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="n in 5" :key="n" class="d-flex justify-space-between" lg="4" md="4" sm="6">
          <cards class="ma-2"></cards>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import format from "date-fns/format";
import cards from "@/components/dashboardCards";

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
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
  // imageHeight() {
  //   switch (this.$vuetify.breakpoint.name) {
  //     case "sm":
  //       return "600px";
  //     case "md":
  //       return "1500px";
  //     case "lg":
  //       return "1900px";
  //   }
  // }
};
</script>
