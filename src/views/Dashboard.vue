<template>
  <div class="Dashboard">
    <v-container v-if="!user">
      <v-row>
        <v-col>
          <h1>Please Log In to unlock a Dashboard!</h1>
          <p v-for="card in cards" :key="card.id">{{ card.title }}</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-else>
      <v-row>
        <v-col>
          <h3>Card View</h3>
          <p v-for="card in cards" :key="card.id">{{ card.title }}</p>
        </v-col>
      </v-row>

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

      <v-row>
        <v-col class="d-inline-flex flex-wrap justify-space-between">
          <cards class="mx-2" v-for="n in 5" :key="n"></cards>
        </v-col>
      </v-row>
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
      cards: []
    };
  },
  firestore() {
    return {
      cards: db.collection("cards")
    };
  },
  computed: {
    user: () => store.user
  }
};
</script>
