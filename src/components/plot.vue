<template>
  <div class="plot" :style="dotStyles"></div>
</template>

<script>
export default {
  props: {
    position: Number,
    step: Number
  },
  computed: {
    dotStyles() {
      return {
        left: `calc(${this.position * 100}% )`
      };
    }
  }
};
</script>
