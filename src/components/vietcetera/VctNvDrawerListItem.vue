<template>
  <v-list-item class="v_list_item">
    <!-- in design: <a :style="importedStyle-a"> <div :style="importedStyle-div">  </div</a> -->
    <div v-if="!isOnTheRightSide">
      <a
        v-if="!isMainComponentContentText"
        :href="content.href"
        :class="styleComputed"
        style="width: 100%"
      >
        <div v-if="hasIcon">
          <img
            v-if="hasIconSrc"
            :src="content.iconSrc"
            style="width: 50px; height: 50px"
          />
          <div v-else v-html="iconHtml"></div>
        </div>

        <!-- TODO: for now, every item of level1 will look like internaltional edition , I'll do sth later-->
        <span
          id="title"
          class="ml_2 typo_600_13pt typo_600_16pt defaultTextColor inline uppercase justify_center width_100Percents"
          style="opacity: 0.7"
          >{{ content.name }}</span
        >
      </a>

      <div v-else>
        <div v-if="hasIcon">
          <img
            v-if="hasIconSrc"
            :src="content.iconSrc"
            style="width: 50px; height: 50px"
          />
          <div v-else v-html="iconHtml"></div>
        </div>
        <div class="flex py_12pt px_4">
          <span
            class="ml_2 typo_600_13pt typo_600_16pt defaultTextColor inline uppercase justify_center width_100Percents"
            :class="{ text_nvDrawerLv1: isLevel1, typo_600_18pt: isLevel1 }"
            >{{ content.name }}</span
          >
        </div>
      </div>
    </div>
    <div v-else>
      <div><!-- div that hold template for content.id --></div>
      <span><!-- for content.name or title--></span>
    </div>
    <div>
      <v-list v-if="content.subContents">
        <VctNvDrawerListItem
          v-for="item in content.subContents"
          :key="item"
          :content="item"
          :isOnTheRightSide="isOnTheRightSide"
        ></VctNvDrawerListItem>
      </v-list>
    </div>
  </v-list-item>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    // TODO: if it's not on the right side, then it's on the left side
    isOnTheRightSide: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      hasIcon: this.content.hasIcon,
      itemType: this.content.itemType,
      iconHtml: this.content.icon,
      icon: this.content.icon,
      hasIconSrc:
        this.content.iconSrc !== null && this.content.iconSrc !== undefined
          ? true
          : false,
      style: this.content.style,
      hasCustomStyle: this.content.hasCustomStyle,
      importClasses: this.content.class,
      level: this.content.level,
    };
  },
  methods: {
    // TODO: think about compress img to low quality but still acceptable,
    //     : in demo html it works, but still don't know how to implement in vue
    //     : https://devdocs.io/dom/canvasrenderingcontext2d/imagesmoothingquality
  },
  computed: {
    isMainComponentContentText() {
      return this.itemType === "text" ? true : false;
    },

    styleComputed() {
      if (this.hasCustomStyle === true) {
        //console.log(this.importClasses);
        return this.importClasses;
      } else {
        return "default";
      }
    },

    isLevel1() {
      if (this.level == 1) {
        return true;
      } else return false;
    },
  },
};
</script>

<style scoped>
@import "./VctNvDrawerListItem.css";
</style>
