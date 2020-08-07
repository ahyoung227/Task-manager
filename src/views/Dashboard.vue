<template>
  <div class="Dashboard">
    <v-container>
      <!-- Search bar -->
      <v-row>
        <v-col cols="4">
          <Tasksetscreation />
        </v-col>
        <v-col cols="8">
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
      <cards></cards>
      <!-- </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
import cards from "@/components/DashboardCards.vue";
import Tasksetscreation from "../components/Tasksetscreation";
import { db, store } from "@/firebase";

export default {
  components: {
    cards,
    Tasksetscreation
  },
  data() {
    return {
      items: [{ title: "Clone/Copy" }, { title: "Unsubscribe" }],
      cards: [],
      tasksets: []
    };
  },
  firestore() {
    return {
      tasksets: db.collection("tasksets"),
      cards: db.collection("cards")
    };
  },
  computed: {
    user: () => store.user
  }
};
</script>
