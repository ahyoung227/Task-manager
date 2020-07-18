<template>
  <div class="Dashboard mx-16 px-10">
    <v-row>
      <v-dialog v-model="dialog" max-width="600px">
        <!-- dialog button-->
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"
            >Create Task-Set</v-btn
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
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-main-click="false"
                    :return-value.sync="chosenDate"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="chosenDate"
                        label="Picker in menu"
                        prepend-icon="event"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="due" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn class="mx-2" fab dark color="indigo"
                        ><v-icon dark>mdi-plus</v-icon></v-btn
                      >
                      <v-btn text color="primary" @click="menu = false"
                        >Cancel</v-btn
                      >
                      <v-btn text color="primary" @click="$refs.menu.save(date)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>

                  <div
                    class="mx-5 task"
                    v-for="task in tasks"
                    :key="task.title"
                  >
                    <v-row>
                      <v-col>
                        <v-card class="pa-6 grey--text" height="70px"
                          ><span
                            class="blue darken-2 text-center white--text"
                            >{{ task.date }}</span
                          >
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
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- Card -->
    <v-row class="mb-4" justify="center">
      <v-col v-for="n in 4" :key="n" cols="auto">
        <v-card
          :loading="loading"
          class="mx-auto my-12 ml-10"
          max-width="350"
          :to="{ name: 'Taskset' }"
        >
          <!-- Card header -->
          <v-card-actions>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/women/85.jpg"
              ></v-img>
            </v-list-item-avatar>
            <v-card-title>Task-set Name</v-card-title>

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
            <v-btn color="deep-purple lighten-2" text outlined>Update</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import format from "date-fns/format";

export default {
  data() {
    return {
      items: [{ title: "Clone/Copy" }, { title: "Unsubscribe" }],
      dialog: false,
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
      chosenDate: "",
      date: new Date().toISOString().substr(0, 10),
      published: true,
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
};
</script>
