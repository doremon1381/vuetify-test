<template>
  <div class="mainDiv bg_white">
    <AdsBanner />
    <v-layout class="rounded rounded-md">
      <VietceteraAppBar title="Vietcetera" :hideTogleButtonWhenDisplayIsLgAndUp="true" :height="toolbarHeight"
        @Click_Stop="drawer = !drawer" />
      <!-- TODO: for me, I'll modify this property to stick the navigation drawer to appbar,
               : but in vietcetera.com, it's apperance is not the way I think 
        :style="{          
          'top':toolbarHeight+'px'
        }" -->
      <v-navigation-drawer v-model="drawer" class="styles_navigationDrawer_left bg_white">
        <v-list style="padding-top: 1.5rem">
          <VctNvDrawerListItem v-for="item in leftNvDrawerContent" :key="item.id" :content="item">
          </VctNvDrawerListItem>
        </v-list>
      </v-navigation-drawer>

      <v-main class="d-flex item_center justify_center v_main_section" style="height: 100vh">
        Main Content
        <div id="1">
          <div>
            <VctCard></VctCard>
            <VctCard></VctCard>
          </div>
          <div>
            <VctCard></VctCard>
            <VctCard></VctCard>
            <VctCard></VctCard>
          </div>
          <div>Quang cao</div>
          <div>
            <VctCard></VctCard>
          </div>
        </div>
        <div></div>
      </v-main>

      <v-navigation-drawer location="right" class="styles_right_side_section styles_border_right_side_section duration_300 bg_white">
        <v-list style="padding-top: 1.5rem;">
          <VctNvDrawerListItem v-for="item in rightNvDrawerContent" :key="item.id" :content="item">
          </VctNvDrawerListItem>
        </v-list>
        <div>
          <p style="color: black">Quang Cao</p>
        </div>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<script>
import VietceteraAppBar from "./vietceteraAppBar.vue";
import AdsBanner from "./adsBanner.vue";

// import VctNvDrawerListItem from "./VctNvDrawerListItem.vue";
import { leftNvDrawerContent, rightNvDrawerContent } from "./VctNvDrawerData";

const currentWindowResolution = {
  Width: window.screen.width * window.devicePixelRatio,
  Height: window.screen.height * window.devicePixelRatio,
};

export default {
  components: {
    VietceteraAppBar,
    AdsBanner,
  },
  data() {
    return {
      drawer: null,
      leftNvDrawerContent,
      rightNvDrawerContent,
      toolbarHeight: 54,
    };
  },
  methods: {
    // imgSmoothingQuality(src) {
    //   let img = new Image();
    //   img.src = src;
    //   img.onload = () => {
    //     ctx.imageSmoothingQuality = "normal";
    //     ctx.drawImage(img, 0, 0, 50, 50);
    //   };
    //},
  },
};
</script>

<style>
/* @media screen and (max-width: 1192px) {
  .rightNavigationDrawer {
    transform: "translateX(-256px)" !important; 
    position: fixed !important;
  }
} */
@import "./VctNvDrawerListItem.css";

.mainDiv {
  flex: auto;
  min-height: calc(100vh - 608px);
  font-family: Poppins-SVN, sans-serif;
  margin: 0;

  box-sizing: border-box;
}
/* 
v-navigation-drawer>>>.v-navigation-drawer__border {
  overflow-y: hidden;
} */
</style>
