<template>
  <div class="timeline my-10 py-5">
    <div class="bar">
      <plot
        v-for="(scalePos, i) in dates"
        :key="i"
        :position="scalePos"
        :step="i"
        >{{ scalePos }}</plot
      >
    </div>
  </div>
</template>

<script>
import plot from "./plot.vue";
export default {
  props: {
    dates: Array
  },
  components: {
    plot
  }
};
</script>

<style type="text/css" scoped>
html,
body {
  font-family: Helvetica, sans-serif;
}

.bar {
  background-color: grey;
  height: 1.5px;
  border-radius: 5px;
  position: relative;
}
.bar .plot {
  top: -6px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: grey;
  display: inline-block;
  position: absolute;
  box-sizing: border-box;
  /*   left: calc(100% - 2.5px); THIS IS THE KEY TO COMPUTE*/
}
</style>
