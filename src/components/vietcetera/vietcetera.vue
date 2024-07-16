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
      <v-navigation-drawer v-model="drawer" class="styles_navigationDrawer_left">
        <v-list style="padding-top: 1.5rem">
          <VctNvDrawerListItem v-for="item in leftNvDrawerContent" :key="item.id" :content="item">
          </VctNvDrawerListItem>
        </v-list>
      </v-navigation-drawer>

      <v-main id="style_1" class="d-flex item_start justify_center v_main_section "
        style="--v-layout-left: 320px; --v-layout-right: 20%; --v-layout-top: 74px; position:relative;">
        <div style="width: 100%; min-height: 400px; position: relative;">
          <div class="flex flex_direction_row pl_6 pr_8">
            <VctCard :item="vcardData.find((element) => element.id === 1)"></VctCard>
            <VctCard :item="vcardData.find((element) => element.id === 2)"></VctCard>
          </div>
          <div id="div_1" class="flex flex_direction_row pl_6 pr_8"
            style="overflow-x: auto; overflow-y: hidden; position: relative;">
            <VctCard :item="vcardData.find((element) => element.id === 3)"></VctCard>
            <VctCard :item="vcardData.find((element) => element.id === 4)"></VctCard>
            <VctCard :item="vcardData.find((element) => element.id === 5)"></VctCard>
          </div>
          <div class="flex flex_direction_column pl_6 pr_8" style="margin-top:10px">
            <VctCard :item="vcardData.find((element) => element.id === 6)"></VctCard>
            <VctCard :item="vcardData.find((element) => element.id === 7)"></VctCard>
            <VctCard :item="vcardData.find((element) => element.id === 8)"></VctCard>
          </div>
        </div>
        <div></div>
      </v-main>

      <v-navigation-drawer location="right"
        class="styles_right_side_section styles_border_right_side_section duration_300 bg_white">
        <v-list style="padding-top: 1.5rem;">
          <VctNvDrawerListItem v-for="item in rightNvDrawerContent" :key="item.id" :content="item">
          </VctNvDrawerListItem>
        </v-list>
        <div>
          <a href="https://img.vietcetera.com/uploads/images/11-jul-2024/quote-of-the-day-canbang.jpg"
            style="width:100%"></a>
        </div>
        <div style="position: sticky;">
          <a
            href="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F03-jul-2024%2Fsmqd-300x600-min.png&q=80&w=600"></a>
        </div>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<script>
import VietceteraAppBar from "./vietceteraAppBar.vue";
import AdsBanner from "./adsBanner.vue";
import { vcardData } from './VctCardData';

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
      vcardData
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
@media screen and (min-width: 1668px) {
  .v_main_section {
    flex-shrink: 0;
    padding-left: .75rem;
    padding-right: .75rem;
    width: calc(56.3%);

    /* --v-layout-left: 10px;
    --v-layout-right: 20%;
    --v-layout-top: 64px;
    --v-layout-bottom: 0px; */
  }

  .styles_side-section__JUV6m.styles_left__PgAeQ {
    padding-left: 1rem;
    width: 290px
  }

  .styles_side-section__JUV6m.styles_right__8Hl3r {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 18.75%
  }
}

@media screen and (max-width: 1280px) {
  .v_main_section {
    --v-layout-left: 40px !important;
    --v-layout-right: 0px !important;
  }
}

.mainDiv {
  flex: auto;
  min-height: calc(100vh - 608px);
  font-family: Poppins-SVN, sans-serif;
  margin: 0;

  box-sizing: border-box;
}

.v_main_section {
  padding-top: 1.5rem;
  position: relative;

  height: 100vh;

  max-width: 60vw;
  min-width: none;

  overflow: auto;
  overflow-y: auto;
  /* --v-layout-top: 64px;
  --v-layout-bottom: 0px; */
}

.height_100vh {
  height: 100vh;
}

.styles_blockInfoArticle {
  bottom: 0;
  position: absolute;
  width: 100%
}

/* 
v-navigation-drawer>>>.v-navigation-drawer__border {
  overflow-y: hidden;
} */

/* width */
/* ::-webkit-scrollbar {
  width: 10px;
} */

/* Track */
/* ::-webkit-scrollbar-track {
  background: #f1f1f1; 
} */

/* Handle */
/* ::-webkit-scrollbar-thumb {
  background: #888; 
} */

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #555; 
} */


/*
 *  STYLE 1
 */
/* #div_1::-webkit-scrollbar {
  height: 5px;
  background-color: #F5F5F5;
}

#div_1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  height: 5px;
  border-radius: 6px;
  background-color: #F5F5F5;
}

#div_1::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  --tw-bg-opacity: 1;
  background-color: rgb(122 122 122 / var(--tw-bg-opacity));

  border-radius: 3px;
  height: 5px;
}

#div_1::-webkit-scrollbar-thumb:hover {
  background: #555;
} */

#div_1::-webkit-scrollbar,
#div_1::-webkit-scrollbar-thumb,
#div_1::-webkit-scrollbar-track {
  height: 6px;
  border: none;
  background-color: transparent;
  background: white;
}

#div_1::-webkit-scrollbar-button,
#div_1::-webkit-scrollbar-track-piece,
#div_1::-webkit-scrollbar-corner,
#div_1::-webkit-resizer {
  display: none;
}

#div_1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  height: 6px;
  border-radius: 6px;
  background-color: #F5F5F5;
}

#div_1::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  --tw-bg-opacity: 1;
  background-color: rgb(122 122 122 / var(--tw-bg-opacity));

  border-radius: 6px;
}

#div_1::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* #mainDiv::-webkit-scrollbar,
#mainDiv::-webkit-scrollbar-thumb,
#mainDiv::-webkit-scrollbar-track {
  display: none;
  border: none;
  background-color: transparent;
  background: white;
} */
</style>
