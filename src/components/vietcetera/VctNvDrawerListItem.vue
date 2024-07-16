<template>
  <v-list-item class="v_list_item">
    <!-- in design: <a :style="importedStyle-a"> <div :style="importedStyle-div">  </div</a> -->
    <!-- TODO: for now, every item of level1 will look like internaltional edition , I'll do sth later-->
    <div :class="content.hasCustomStyle ? content.style.rootItem : ''" style="width: 100%; height: 100%">
      <a v-if="content.href" :href="content.href" style="width: 100%; height: 100%"
        :class="content.style.link ? content.style.link : ''">
        <div v-if="content.hasIcon" :class="content.style.image ? content.style.image : ''">
          <img v-if="hasIconSrc" :src="content.iconSrc" class="img_size" />
          <div v-else v-html="content.iconHtml"></div>
        </div>
        <div id="content">
          <span id="title" :class="content.style.content ? content.style.content : ''">{{ content.name }}</span>
        </div>
        <div>
          <slot name="endRegion"></slot>
        </div>
      </a>
      <div v-else :class="content.style.link ? content.style.link : ''" style="width: 100%; height: 100%">
        <div v-if="content.hasIcon" :class="content.style.image ? content.style.image : ''">
          <img v-if="hasIconSrc" :src="content.iconSrc" class="img_size" />
          <div v-else v-html="content.iconHtml"></div>
        </div>
        <div id="content">
          <span id="title" :class="content.style.content ? content.style.content : ''">{{ content.name }}</span>
        </div>
        <div>
          <slot name="endRegion"></slot>
        </div>
      </div>
    </div>
    <div id="outerDiv" :class="content.style.subContents_outerDiv
      ? content.style.subContents_outerDiv
      : ''
      ">
      <v-list v-if="content.subContents">
        <VctNvDrawerListItem v-for="item in content.subContents" :key="item" :content="item" />
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
    // TODO: comment for now
    // customClass: {
    //   type: String,
    // },
    // TODO: if it's not on the right side, then it's on the left side
    // isOnTheRightSide: {
    //   type: Boolean,
    //   required: true,
    // },
  },
  data() {
    return {};
  },
  methods: {
    // TODO: think about compress img to low quality but still acceptable,
    //     : in demo html it works, but still don't know how to implement in vue
    //     : https://devdocs.io/dom/canvasrenderingcontext2d/imagesmoothingquality
  },
  computed: {
    hasIconSrc() {
      return this.content.iconSrc !== null && this.content.iconSrc !== undefined
        ? true
        : false;
    },
  },
};
</script>

<style scoped>
@import "./VctNvDrawerListItem.css";

div {
  padding-top: 0px;
  padding-bottom: 0px;
}

*,
:after,
:before {
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
}
</style>
