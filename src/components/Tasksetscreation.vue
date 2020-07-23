<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="600px">
      <!-- dialog button-->
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"
          >+ Create Task-Set</v-btn
        >
      </template>
      <!-- dialog title-->
      <v-card>
        <v-card-title>
          <v-text-field
            label="Title"
            :rules="rules"
            hide-details="auto"
            placeholder="Add Title..."
          ></v-text-field>
        </v-card-title>
        <template>
          <v-tabs grow>
            <v-tab>General</v-tab>

            <v-tab>Subtasks</v-tab>

            <v-tab>People</v-tab>
            <!-- dialog general-->
            <v-tab-item>
              <v-card flat tile>
                <v-container fluid>
                  <v-textarea
                    name="input-7-1"
                    filled
                    label="Description"
                    auto-grow
                    value
                  ></v-textarea>
                </v-container>
              </v-card>
            </v-tab-item>
            <!-- dialog subtasks-->
            <v-tab-item>
              <v-card flat tile>
                <v-container fluid>
                  <v-row justify="center">
                    <v-col cols="3">
                      <v-menu
                        ref="menu1"
                        v-model="menu1"
                        transition="scale-transition"
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="dateFormatted"
                            label="Due Date"
                            hint="MM/DD/YYYY format"
                            persistent-hint
                            v-bind="attrs"
                            @blur="date = parseDate(dateFormatted)"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="date"
                          no-title
                          @input="menu1 = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        label="Subtask Name"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                      <v-btn class="mx-2" fab dark small color="indigo">
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>

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
              </v-card>
            </v-tab-item>
            <!-- dialog people-->
            <v-tab-item>
              <v-card flat tile>
                <v-card-text>Invited</v-card-text>
                <div class="text-center">
                  <v-chip
                    v-if="chip1"
                    class="ma-2"
                    close
                    @click:close="chip1 = false"
                    >John Doe</v-chip
                  >
                  <v-chip
                    v-if="chip2"
                    class="ma-2"
                    close
                    @click:close="chip2 = false"
                    >John Doe</v-chip
                  >
                  <v-chip
                    v-if="chip3"
                    class="ma-2"
                    close
                    @click:close="chip3 = false"
                    >John Doe</v-chip
                  >
                  <v-chip
                    v-if="chip4"
                    class="ma-2"
                    close
                    @click:close="chip4 = false"
                    >John Doe</v-chip
                  >
                </div>

                <v-card-text>Subscribed</v-card-text>
                <div class="text-center">
                  <v-chip
                    v-if="chip1"
                    class="ma-2"
                    close
                    @click:close="chip1 = false"
                    >John Doe</v-chip
                  >
                  <v-chip
                    v-if="chip2"
                    class="ma-2"
                    close
                    @click:close="chip2 = false"
                    >John Doe</v-chip
                  >
                  <v-chip
                    v-if="chip3"
                    class="ma-2"
                    close
                    @click:close="chip3 = false"
                    >John Doe</v-chip
                  >
                  <v-chip
                    v-if="chip4"
                    class="ma-2"
                    close
                    @click:close="chip4 = false"
                    >John Doe</v-chip
                  >
                </div>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </template>
        <!-- dialog footer-->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-switch v-model="published" label="published"></v-switch>
          <v-card-text>More option</v-card-text>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Tasksetscreation",
  data() {
    return {
      items: [{ title: "Clone/Copy" }, { title: "Unsubscribe" }],
      dialog: false,
      dialog2: false,
      menu1: false,
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      published: true,
      tasks: [
        { date: "JUN 03", title: "Submit IP proposal" },
        { date: "JUL 15", title: "Submit first complete draft" },
        { date: "AUG 30", title: "Get advisor signature" }
      ]
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>
