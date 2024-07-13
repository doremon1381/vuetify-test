<template>
  <div class="mainDiv bg_white">
    <AdsBanner />
    <v-layout class="rounded rounded-md">
      <VietceteraAppBar
        title="Vietcetera"
        :hideTogleButtonWhenDisplayIsLgAndUp="true"
        :height="toolbarHeight"
        @Click_Stop="drawer = !drawer"
      />
      <!-- TODO: for me, I'll modify this property to stick the navigation drawer to appbar,
               : but in vietcetera.com, it's apperance is not the way I think 
        :style="{          
          'top':toolbarHeight+'px'
        }" -->
      <v-navigation-drawer v-model="drawer" class="styles_left__PgAeQ bg_white">
        <v-list class="pt_6">
          <VctNvDrawerListItem
            v-for="item in leftNvDrawerContent"
            :key="item.id"
            :content="item"
            :isOnTheRightSide="false"
          >
          </VctNvDrawerListItem>
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer location="right" class="bg_white">
        <v-list>
          <v-list-item title="Drawer right"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      <v-main class="d-flex item_center justify_center" style="height: 100vh">
        Main Content
      </v-main>

    </v-layout>
  </div>
</template>

<script>
import VietceteraAppBar from "./vietceteraAppBar.vue";
import AdsBanner from "./adsBanner.vue";

// import VctNvDrawerListItem from "./VctNvDrawerListItem.vue";
import VctNvDrawerListItem from "./VctNvDrawerListItemChild.vue";
import { leftNvDrawerContent } from "./VctNvDrawerData";

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
}
</style>
