<template>
  <div class="Dashboard">
    <v-container class="px-4" fluid>
      <!-- Search bar -->
      <v-row>
        <v-col>
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

      <Tasksetscreation />

      <v-row>
        <v-col class="d-inline-flex flex-wrap justify-space-between">
          <cards class="mx-2" v-for="n in 4" :key="n"></cards>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Tasksetscreation from "../components/Tasksetscreation";
import cards from "@/components/dahsboardCards";

export default {
  components: {
    cards,
    Tasksetscreation
  },
  data() {
    return {
      items: [{ title: "Clone/Copy" }, { title: "Unsubscribe" }],
      published: true
    };
  }
};
</script>
