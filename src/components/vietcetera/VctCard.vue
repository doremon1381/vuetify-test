<template>
    <!-- prepend-icon="$vuetify" subtitle="The #1 Vue UI Library" -->
    <!-- 3 different style: big, medium, small -->
    <v-card class="mx-auto" width="400px" style=" min-width:min-content">
        <div style="width: 100%; height: 100%; position: relative;">
            <a href="/" style="text-decoration: none;" class="text_lmInkSecondary2">
                <!-- <span class="font-weight-black">Welcome to Vuetify</span>
                <p class="font-weight-black">The #1 Vue UI Library</p> -->
                <!-- class="aspect-video w-full h-full" -->
                <img src="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F11-jul-2024%2Fchatluongsong-01-1720685591685.jpg&amp;q=80&amp;w=1536"
                    alt="Nâng cao năng lực với 5 thói quen bồi đắp tư duy" 
                    style="width:100%; height: 100%"
                    srcset="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F11-jul-2024%2Fchatluongsong-01-1720685591685.jpg&amp;q=80&amp;w=1536, https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F11-jul-2024%2Fchatluongsong-01-1720685591711.jpg&amp;q=80&amp;w=2304 2x">
                <div class="opacity-90 absolute w-full h-full bottom-0 z-0 rounded-8pt"
                    style="background: linear-gradient(rgba(0, 0, 0, 0) 40%, rgb(0, 0, 0) 80%);"></div>
            </a>
        </div>
        <div class="styles_blockInfoArticle" style="background-color: transparent !important;">
            <v-card-text class="bg-surface-light pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </v-card-text>

            <v-card-action>
                <v-card style="display: flex; flex-direction: row">
                    <a href="/" style="text-decoration: none; display: inherit;" class="text_lmInkSecondary2">
                        <v-avatar color="blue-darken-2">
                            <v-icon icon="mdi-alarm"></v-icon>
                        </v-avatar>
                        <p>name</p>
                        <p>Time</p>
                    </a>
                    <div style="display: inherit;">
                        <v-btn>like</v-btn>
                        <v-btn>comment</v-btn>
                    </div>
                </v-card>
            </v-card-action>
        </div>
    </v-card>
</template>

<style>
@import "./VctNvDrawerListItem.css";
</style>