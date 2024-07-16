<template>
    <!-- prepend-icon="$vuetify" subtitle="The #1 Vue UI Library" -->
    <!-- 3 different style: big, medium, small -->
    <div class="maincard_default">
        <v-card class="card_default" :class="cardDefaultByType">
            <!-- position_relative -->
            <div :class="articleImgStyle">
                <a href="/" class="text_lmInkSecondary2 styles_as_button">
                    <img :src="item.articleImg" :alt="item.articleTitle" style=" width:100%;">
                    <div :class="imgFooterStyleWhenMedium"
                        style="background: linear-gradient(rgba(0, 0, 0, 0) 40%, rgb(0, 0, 0) 80%);"></div>
                </a>
            </div>

            <div class="styles_blockInfoArticle cardType_article_parent"
                :class="{ cardType_article_parent_big: item.cardType === 'big', cardType_article_parent_medium: item.cardType === 'medium', cardType_article_parent_small: item.cardType === 'small' }">
                <div>
                    <v-card-text
                        :class="{ cardType_article_big: item.cardType === 'big', cardType_article_medium: item.cardType === 'medium', cardType_article_small: item.cardType === 'small' }">
                        <p class="style_title_custom1 .min_h_[84px]" :class=articleTitleStyle>{{
                            item.articleTitle }}
                        </p>
                        <p v-if="item.articleSubTitle" :class="articleSubTitleStyle">
                            {{ item.articleSubTitle }}</p>
                    </v-card-text>
                </div>

                <v-card class="card_Footer_defaut item_center">
                    <a href="/" style="text-decoration: none; display: inherit;"
                        class="text_lmInkSecondary2 styles_as_button ">
                        <v-avatar color="blue-darken-2">
                            <v-icon class="styles_s_btn_icon_40">
                                <img :src="item.writerIconSrc" class="width_100% height_100% ">
                            </v-icon>
                        </v-avatar>
                        <div style="display: flex; flex-direction: column; padding-left: 10px"
                            :class="cardFooterStyleWhenMedium">
                            <p class="typo_600_14pt">{{ item.writer }}</p>
                            <div>
                                <span class="typo_400_14pt">{{ item.timeWasPublished }}</span> <span v-if="item.timeToRead" class="typo_400_14pt"> * {{ item.timeToRead }}</span>
                            </div>                            
                        </div>
                    </a>
                    <div style="display: inherit;">
                        <v-btn v-if="item.footer.like" class="btn_default btn_icon btn_iconHover" style="opacity: 0.5;">
                            <img src="./img/heart.png">
                        </v-btn>
                        <v-btn v-if="item.footer.comment" class="btn_default btn_icon btn_iconHover">
                            <div v-html="vctCommentIcon" style="width: 24px; height: 24px;"></div>
                        </v-btn>
                        <v-btn v-if="item.footer.bookmark" :class="bookmarkIconStyleWhenSmallCard"><img
                                src="./img/bookmark.png"></v-btn>
                    </div>
                </v-card>
            </div>
        </v-card>
    </div>

</template>

<script>
import { vctCommentIcon } from './VctIcons';

export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            vctCommentIcon,
        };
    },
    computed: {
        cardDefaultByType() {
            //console.log(this.item.cardType);
            if (this.item.cardType === 'big')
                return 'cardType_big';
            else if (this.item.cardType === 'medium')
                return 'cardType_medium';
            else if (this.item.cardType === 'small')
                return 'cardType_small';
            else {
                return '';
            }
        },
        imgFooterStyleWhenMedium() {
            //console.log(this.item.cardType);
            if (this.item.cardType === "medium") {
                return "opacity_90 absolute width_100% height_100% bottom_0 z_0";
            }
            else {
                return '';
            }
        },
        cardFooterStyleWhenMedium() {
            if (this.item.cardType === "medium") {
                return "text_white ";
            }
            else {
                return ' ';
            }
        },
        bookmarkIconStyleWhenSmallCard() {
            if (this.item.cardType !== 'small')
                return 'btn_default btn_bookmark btn_iconHover';
            else {
                return 'btn_default btn_icon btn_iconHover opacity_60';
            }
        },
        articleImgStyle() {
            if (this.item.cardType === 'big')
                return "card_headerImage_big";
            else if (this.item.cardType === 'medium')
                return 'card_headerImage_medium';
            else if (this.item.cardType === 'small')
                return 'card_headerImage_small';
            else {
                return '';
            }
        },
        articleTitleStyle() {
            if (this.item.cardType === 'small')
                return 'cardType_article_small_title';
            else {
                return '';
            }
        },
        articleSubTitleStyle() {
            if (this.item.cardType === 'small')
                return 'cardType_article_small_subTitle';
            else {
                return '';
            }
        },
    },
    mounted() {
        console.log(this.item.cardType);
    }
}

</script>

<style scoped>
@import "./VctNvDrawerListItem.css";
@import "./VctCard.css";

/* .card_default {

    height: 55vh;

    
} */
</style>