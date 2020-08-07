<template>
  <v-container>
    <v-row>
      <v-col class="d-inline-flex flex-wrap justify-space-between">
        <v-card
          width="28%"
          min-width="320px"
          class="cards ma-5"
          v-for="taskset in tasksets"
          :key="taskset.id"
        >
          <!-- Card header -->
          <v-card-actions>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
              ></v-img>
            </v-list-item-avatar>
            <v-card-title>{{ taskset.title }}</v-card-title>

            <v-spacer></v-spacer>

            <v-menu right class="black--text">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <!-- taskset menu on the right side but now it doesn't work because of the router link -->
              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-actions>

          <v-img
            height="250"
            src="https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg"
          ></v-img>
          <!-- Card progress -->
          <v-stepper value="2" class="elevation-0">
            <v-stepper-header>
              <v-stepper-step step="1" complete></v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2"></v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3"></v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="4"></v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="5"></v-stepper-step>
            </v-stepper-header>
          </v-stepper>
          <!-- Card circle progress1 -->
          <v-list-item>
            <v-list-item-icon>
              <v-progress-circular :value="20"></v-progress-circular>
            </v-list-item-icon>
            <v-list-item-subtitle>Previous Subtask Name</v-list-item-subtitle>
            <v-list-item-icon>
              <v-icon color="red darken-2">verified_user</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <!-- Card circle progress2 -->
          <v-list-item>
            <v-list-item-icon>
              <v-progress-circular :value="60"></v-progress-circular>
            </v-list-item-icon>
            <v-list-item-subtitle>Next Subtask Name</v-list-item-subtitle>
            <v-list-item-icon>
              <v-icon color="yellow darken-2">warning</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <!-- Card footer -->
          <v-card-actions>
            <v-card-text>
              <v-chip> <v-icon class="mr-2">people</v-icon>24 </v-chip>
            </v-card-text>
            <v-btn
              color="deep-purple lighten-2"
              text
              outlined
              :to="{ name: 'Taskset', params: { id: taskset.id } }"
              >View</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db, store } from "@/firebase";

export default {
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
