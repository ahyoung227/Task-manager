<template>
  <!-- Navigation drawer-user -->
  <v-navigation-drawer app permanent expand-on-hover mini-variant-width="100">
    <v-list>
      <v-list-item class="px-2 grey darken-3">
        <v-list-item-avatar v-if="user">
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-avatar v-else>
          <v-icon dark>mdi-account-circle</v-icon>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link class="grey darken-3">
        <v-list-item-content v-if="user">
          <v-list-item-title class="title white--text">{{
            user.displayName
          }}</v-list-item-title>
          <v-list-item-subtitle class="white--text">{{
            user.email
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <!-- Navigation drawer-menu -->
    <v-list nav dense>
      <v-list-item :to="{ name: 'Dashboard' }">
        <v-list-item-icon>
          <v-icon>mdi-widgets</v-icon>
        </v-list-item-icon>
        <v-list-item-title>TASK-SETS</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>add_alert</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ROBOT</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>MENU</v-list-item-title>
      </v-list-item>
    </v-list>
    <!-- Navigation drawer-logout -->
    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          block
          class="px-2 grey darken-2 white--text mb-2"
          @click="signIn"
          v-if="!user"
          >Login</v-btn
        >
        <v-btn
          block
          class="px-2 grey darken-2 white--text"
          @click="signOut"
          v-else
          >Logout</v-btn
        >
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { firebase, db, store } from "@/firebase";

var cardsRef = db.collection("cards");

export default {
  name: "Navdrawer",
  data: () => ({
    myWord: "hello",
    newCard: {
      title: ""
    },
    cards: []
  }),
  firestore: {
    cards: db.collection("cards")
  },
  computed: {
    user() {
      return store.user;
    }
  },
  methods: {
    save() {
      cardsRef.add(this.newCard);
    },
    signIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    signOut() {
      firebase.auth().signOut();
    },
    checkWord() {
      if (this.myWord === "hello") {
        alert("it is working!");
      }
    }
  }
};
</script>
