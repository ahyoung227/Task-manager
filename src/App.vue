<template>
  <v-app>
    <!-- Navigation drawer-user -->
    <v-navigation-drawer app permanent expand-on-hover>
      <v-list>
        <v-list-item class="px-2 grey darken-3">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link class="grey darken-3">
          <v-list-item-content>
            <v-list-item-title class="title white--text"
              >Sandra Adams</v-list-item-title
            >
            <v-list-item-subtitle class="white--text"
              >sandra_a88@gmail.com</v-list-item-subtitle
            >
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
          <v-btn block class="px-2 grey darken-2 white--text">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <!-- <Navbar/> -->

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    // Navbar
  },
  data: () => ({
    //
  })
};
</script>
