<template>
  <v-app>
    <Navdrawer />

    <v-main>
      <Tab />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navdrawer from "./components/Navdrawer";
import Tab from "./components/Tab";

export default {
  name: "App",
  components: {
    Navdrawer,
    Tab
  },
  data: () => ({
    //
  })
};
</script>
