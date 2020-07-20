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

      <!-- dialog -->
      <!-- <v-row>
        <v-dialog v-model="dialog" max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on"
              >Create Task-Set</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <v-text-field
                label="Title"
                hide-details="auto"
                placeholder="Add Title..."
              ></v-text-field>
            </v-card-title>
            <template>
              <v-tabs grow>
                <v-tab>General</v-tab>
                <v-tab>Subtasks</v-tab>
                <v-tab>People</v-tab>
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
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(date)"
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
      </v-row> -->

      <v-row>
        <v-col class="d-inline-flex flex-wrap justify-space-between">
          <cards class="mx-2" v-for="n in 4" :key="n"></cards>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import format from "date-fns/format";
import cards from "@/components/dahsboardCards";

export default {
  components: {
    cards
  },
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
