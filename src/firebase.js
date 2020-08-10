// import Vue from "vue";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import router from "./router";
import store from "./store";

const firebaseConfig = {
  apiKey: "AIzaSyAPbYnorj6Z-e_8oFHu3R96agVZabjnet8",
  authDomain: "su-20-d2261.firebaseapp.com",
  databaseURL: "https://su-20-d2261.firebaseio.com",
  projectId: "su-20-d2261",
  storageBucket: "su-20-d2261.appspot.com",
  messagingSenderId: "783117209583",
  appId: "1:783117209583:web:8755db067aab412018b01a",
  measurementId: "G-KE5PVH0G7V"
};

const db = firebase.initializeApp(firebaseConfig).firestore();

// const store = Vue.observable({
//   user: null
// });

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("signIn", user);
    // if (router.currentRoute.path !== "/") {
    //   router.push({ path: "/", params: { user: user } });
    // }
  } else {
    store.dispatch("signOut");
    // if (router.currentRoute.path !== "/") {
    //   router.push({ path: "/", params: { user: null } });
    // }
  }
});

export { firebase, db };
