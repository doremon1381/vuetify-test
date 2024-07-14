<template>
  <v-app-bar :elevation="2" :style="{'height': height + 'px'}" class="bg_white defaultTextColor">
    <template v-slot:prepend>
      <!-- https://vuetifyjs.com/en/components/navigation-drawers/#temporary -->
      <v-app-bar-nav-icon
        @click.stop="this.$emit('Click_Stop')"
        v-if="!hideTogleButton"
      ></v-app-bar-nav-icon>

      <v-app-bar-title
        :style="{
          'margin-left': marginLeftWhenDisplayResized + 'px' + '!important',
        }"
        >{{ title }}</v-app-bar-title
      >
    </template>

    <div class="appBar_MiddleRegion" v-if="$vuetify.display.lgAndUp">
      <v-btn>home</v-btn>
      <v-btn>youtube</v-btn>
      <v-btn>extend</v-btn>
    </div>

    <div
      class="appBar_EndRegion"
      style="
        justify-content: right;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 4px;
      "
    >
      <v-btn icon style="height: 48px">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn class="styles_btn_main styles_btn_40 styles_btn_main_fill__primary__hover styles_btn_main_fill__primary"> Đăng nhập </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { useDisplay } from "vuetify";

export default {
  props: {
    title: String,
    fontSize: Number,
    // default value will be used when value from parent is undefined or absent
    // https://vuejs.org/guide/components/props.html#prop-validation
    hideTogleButtonWhenDisplayIsLgAndUp: {
      default: false,
      type: Boolean,
    },
    height: {
      style: Number,
      default: 54,
    },
  },
  // still dont know why can't be used only with declaration of emits inside export default
  //   emits: {
  //     Click_Stop: null,
  //   },
  data() {
    return {
      //onScreenMaxWidth: systemResolution.width / 2,
      isDisplayLgAndUp: useDisplay().lgAndUp,
    };
  },
  methods: {},
  computed: {
    marginLeftWhenDisplayResized() {
      // console.log(this.isDisplayLgAndUp);
      return this.isDisplayLgAndUp === true ? 10 : 0;
    },
    hideTogleButton() {
      if (this.hideTogleButtonWhenDisplayIsLgAndUp && this.isDisplayLgAndUp) {
        return true;
      }
    },
  },
};
</script>

<style scoped>
@import "./VctNvDrawerListItem.css";

.appBar_MiddleRegion {
  display: flex;
  justify-content: space-around;
  width: 33.3%;
}

.appBar_EndRegion {
  width: 33.3%;
  display: flex;
  justify-content: flex-end;
}
</style>
