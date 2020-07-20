<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-avatar class="mr-3" size="36" v-if="user">
        <img :src="user.photoURL" :alt="user.displayName" />
      </v-avatar>

      <v-toolbar-title v-if="user">{{ user.displayName }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text @click="signIn" v-if="!user">
        <v-icon left>mdi-google</v-icon>
        Login
      </v-btn>
      <v-btn text @click="signOut" v-else>
        <v-icon left>mdi-trash-can</v-icon>
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <h2>ROUTER VIEW</h2>

      <router-view></router-view>

      <hr />

      <!-- <v-container>
        <v-row>
          <v-col>
            <input type="text" v-model="newTodo.task">
            <v-btn @click="save">SAVE</v-btn>
            <p v-for="todo in todos" :key="todo.id">{{ todo.task }} --- {{ todo.id }}</p>
          </v-col>
        </v-row>
      </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
import { firebase, db, store } from "@/fire";

var todosRef = db.collection("todos");
// What to do with this pesky currentUser object?
// https://michaelnthiessen.com/levels-of-vue-scope/
// https://stackoverflow.com/questions/58967829/how-watch-global-variable-in-component-vuejs
// https://medium.com/better-programming/how-to-manage-vues-state-with-vue-observable-25988a88938b
// https://blog.logrocket.com/vue-firebase-authentication/
// https://levelup.gitconnected.com/vue-js-and-firebase-authentication-a-simple-example-8ecc8313aac6

export default {
  name: "App",

  components: {
    // HelloWorld
  },
  data: () => ({
    myWord: "Alakazam",
    newTodo: {
      task: "",
      done: false
    },
    todos: []
  }),
  firestore: {
    todos: db.collection("todos")
  },
  computed: {
    user() {
      return store.user;
    }
  },
  methods: {
    save() {
      todosRef.add(this.newTodo);
    },
    signIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    signOut() {
      firebase.auth().signOut();
    },
    checkWord() {
      if (this.myWord === "special") {
        alert("special");
      }
    }
  }
};
</script>
