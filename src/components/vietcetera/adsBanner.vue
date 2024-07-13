<template>
  <div
    :style="{
      'min-height': 0.2 * currentWindowResolution.Height + 'px',
      'max-height': 0.25 * currentWindowResolution.Height + 'px',
      'min-width': '25vw',
      margin: 'auto',
      'text-align': 'center',
    }"
  >
    <img
      src="./img/ep01-onair-billboard-55radar-1719892989168.webp"
      :style="{ 'max-height': 250 + 'px' }"
    />
  </div>
</template>

<script>
import { ref } from "vue";

const currentWindowResolution = ref({
  Width: window.screen.width * window.devicePixelRatio,
  Height: window.screen.height * window.devicePixelRatio,
});

export default {
  data() {
    return {
      currentWindowResolution,
    };
  },
};
</script>
