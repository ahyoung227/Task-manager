<template lang="html">
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>Stuff goes here.</p>

    <v-container v-if="!user">
      <v-row>
        <v-col>
          <h1>Please Log In</h1>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-else>
      <v-row>
        <v-col>
          <h1>You are logged in.</h1>
          <div>
            <v-btn @click="consoleUser">console.log(user)</v-btn>
            <p>
              <pre>{{ user.displayName }}<br>{{ user.email }}<br>{{ user.photoURL }}</pre>
            </p>
          </div>

          <hr>
          <h3>Vuefire TEST</h3>
          <p v-for="todo in todos" :key="todo.id">{{ todo.task }} --- {{ todo.id }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db, store } from "@/fire";

export default {

data: () => ({
    todos: []
  }),
firestore() {
    return{
      todos: db.collection('todos')
    }
  },
  computed: {
    user: () => store.user
  },
  methods: {
    consoleUser() {
      console.log(this.user);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
