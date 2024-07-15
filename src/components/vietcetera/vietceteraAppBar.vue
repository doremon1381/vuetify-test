<template>
  <v-app-bar :elevation="2" :style="{ height: height + 'px' }"
    class="defaultTextColor glass">
    <template v-slot:prepend>
      <!-- https://vuetifyjs.com/en/components/navigation-drawers/#temporary -->
      <v-app-bar-nav-icon @click.stop="this.$emit('Click_Stop')" class="btn_40size_important btn_hover mb_10px_important"
        v-if="!hideTogleButton"></v-app-bar-nav-icon>

      <v-app-bar-title class="v_app_bar_title mb_10px_important" :style="{
        'margin-left': marginLeftWhenDisplayResized + 'px' + '!important',
      }">{{ title }}</v-app-bar-title>
    </template>

    <div class="appBar_MiddleRegion mb_10px_important" v-if="$vuetify.display.lgAndUp">
      <v-btn>
        <a href="/vn">
          <div v-html="vctHomeIcon"></div>
        </a>
      </v-btn>
      <v-btn>
        <a href="/vn">
          <div v-html="vctYoutubeIcon"></div>
        </a>
      </v-btn>
      <v-btn>
        <a href="/vn">
          <div v-html="vctInstagramIcon"></div>
        </a>
      </v-btn>
    </div>

    <div class="flex item_center my_auto mr_10px width_33.3% justify_right mb_10px_important height_100%">
      <v-btn icon class="btn_40size_important btn_hover mb_10px_important">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn class="styles_btn_main styles_btn_40 styles_btn_main_fill__primary__hover styles_btn_main_fill__primary mb_10px_important">
        Đăng nhập
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { useDisplay } from "vuetify";
import { vctHomeIcon, vctInstagramIcon, vctYoutubeIcon } from './VctIcons'

const defaultHeight = 64;

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
      vctHomeIcon,
      vctInstagramIcon,
      vctYoutubeIcon
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

.v_app_bar_title {
  position: sticky;
  right: 0px;
  left: 0px;
  width: 100vw;
  margin: 0px calc(50% - 70vw);
  top: 0px;
}

v-app-bar div {
  height: 100% !important;
}
</style>
