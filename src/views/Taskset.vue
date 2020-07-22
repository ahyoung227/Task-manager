<template>
  <div class="Taskset mx-16 pa-5">
    <h1 class="text-center">Integrative Project</h1>
    <h5 class="text-center">By Jin Kuwata</h5>
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

    <v-card class="ma-5 d-flex" v-for="task in tasks" :key="task.title">
      <div class="date blue darken-2 text-center white--text">
        {{ task.date }}
      </div>
      <div class="title pa-6">{{ task.title }}</div>
    </v-card>

    <div>
      <v-btn
        dark
        rounded
        class="float-right ma-5 pa-6 subscribe purple darken-4"
        ><v-icon dark>mdi-plus</v-icon>SUBSCRIBE</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { date: "JUN 03", title: "Submit IP proposal" },
        { date: "JUL 15", title: "Submit first complete draft" },
        { date: "AUG 30", title: "Get advisor signature" },
        { date: "SEP 02", title: "Check degree audit for completion" },
        { date: "SEP 06", title: "Schedule last meeting with advisor" },
        { date: "SEP 10", title: "Some last step..." }
      ]
    };
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

/* .subscribe {
  font-size: 18px;
} */
</style>
