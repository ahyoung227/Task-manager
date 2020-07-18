<template>
  <div class="Taskset mx-15">
    <h1 class="text-center mb-10">Integrative Project</h1>
    <v-divider class="ma-10"></v-divider>
    <p>
      The following is the task-set description for the IP project. You will
      need to complete the following subtasks in order to ensure timely
      graduation.
    </p>

    <p>
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

    <div class="mx-5 task" v-for="task in tasks" :key="task.title">
      <v-row>
        <v-col>
          <v-card class="pa-6 grey--text" height="70px"
            ><span class="blue darken-2 text-center white--text">{{
              task.date
            }}</span>
            {{ task.title }}</v-card
          >
        </v-col>
      </v-row>
    </div>

    <v-btn class="ml-10 ma-10" dark color="indigo" right absolute>
      <v-icon dark>mdi-plus</v-icon>SUBSCRIBE
    </v-btn>
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
