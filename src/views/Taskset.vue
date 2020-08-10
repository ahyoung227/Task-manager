<template>
  <div class="Taskset mx-16 pa-5">
    <v-container fluid class="px-18">
      <h2 class="text-center">{{ taskset.title }}</h2>
      <h1 class="text-center">Integrative Project</h1>
      <h5 class="text-center">{{ taskset.owner }}</h5>
      <v-divider class="ma-10"></v-divider>
      <p class="px-9 ma-0">
        The following is the task-set description for the IP project. You will
        need to complete the following subtasks in order to ensure timely
        graduation.
      </p>

      <p class="px-9 ma-0">
        If you haven’t done any of the tasks below, please take a look at the
        timeline to check how far behind you may be.
      </p>

      <!-- timeline -->
      <timeline :dates="timestamps"></timeline>

      <!-- subtask -->
      <v-card
        class="ma-5 d-flex"
        v-for="subtask in subtasks"
        :key="subtask.name"
      >
        <v-row>
          <v-col
            style="max-width: 80px"
            class="date blue darken-2 text-center white--text"
          >
            <v-row
              ><v-col>{{ subtask.month }}</v-col></v-row
            >
            <v-row
              ><v-col>{{ subtask.day }}</v-col></v-row
            >
          </v-col>
          <v-col class="title pa-6">
            <v-row>{{ subtask.name }}</v-row>
            <v-row>
              <!-- this seems sloppy -->
              <div v-if="subtask.submission">
                <v-text-field
                  v-if="subtask.submission != ''"
                  disabled
                  :label="subtask.submission"
                  prepend-icon="mdi-link-variant"
                ></v-text-field>
              </div>

              <v-text-field
                v-else
                label="Submission link"
                prepend-icon="mdi-link-variant"
              ></v-text-field>
            </v-row>
          </v-col>
          <v-col cols="2" class="d-flex justify-end align-end mx-2">
            <v-btn
              v-if="!subtask.submission"
              small
              rounded
              outlined
              color="primary"
              >Submit</v-btn
            >
          </v-col>
        </v-row>
      </v-card>

      <div>
        <v-btn
          v-if="!user"
          dark
          rounded
          class="float-right ma-5 pa-6 subscribe purple darken-4"
        >
          <v-icon dark>mdi-plus</v-icon>SUBSCRIBE
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import { db } from "@/firebase";
import timeline from "@/components/timeline.vue";

export default {
  components: {
    timeline
  },
  data() {
    return {
      taskset: [],
      subtasks: [],
      id: this.$route.params.id,
      user: true,
      userID: "pnc26",
      timestamps: [],
      x: 42,
      getX: function() {
        return this.x;
      }
    };
  },
  methods: {
    async grabbing() {
      this.taskset = await db
        .collection("priscilla_taskset")
        .doc(this.id)
        .get()
        .then(d => {
          return d.data();
        });

      // there is probably way to simply the below code
      this.subtasks = await db
        .collection("priscilla_taskset")
        .doc(this.id)
        .collection("subtasks")
        .get()
        .then(d => {
          var v = [];
          d.forEach(d => {
            var sub = d.data();
            var date = new Date(sub.dueDate);
            sub.dueDate = date.getTime();
            sub.month = date.toLocaleString("default", { month: "short" });
            sub.day = date.getDate() + 1;
            sub.id = d.id;
            v.push(sub);
          });
          return v.sort(function(a, b) {
            return a.dueDate - b.dueDate;
          });
        });

      if (this.user) {
        //did it this way because couldn't figure out .bind(this)
        var x = await db
          .collection("priscilla_users")
          .where("user", "==", this.userID)
          .get()
          .then(d => {
            var arr = [];
            d.forEach(d => {
              arr.push(d.data());
            });
            return arr;
          });
        // I don't like it being nested... is ther a better way?
        this.subtasks.forEach(d => {
          x.forEach(i => {
            if (i.subtaskID == d.id) {
              d.submission = i.submission;
            }
          });
        });
      }

      this.scaledstamps();
    },

    scaledstamps() {
      var timestamps = this.subtasks;
      let timeLast = timestamps[timestamps.length - 1].dueDate;
      let timeFirst = timestamps[0].dueDate;
      let range = timeLast - timeFirst;
      this.timestamps = timestamps.map(timestamp => {
        return (timestamp.dueDate - timeFirst) / range;
      });
    }
  },
  mounted() {
    this.grabbing();
  }
};
</script>

<style scoped>
h1,
h5,
.date,
.title {
  font-family: Roboto;
  font-weight: 300;
  font-style: normal;
}
h1 {
  font-size: 60px;
}

h5 {
  font-size: 20px;
}

.date {
  width: 70px;
  font-size: 23px;
  padding: 6px;
}

.title {
  font-size: 23px;
}
</style>
