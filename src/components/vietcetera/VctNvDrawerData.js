import {
    vctBagIcon,
    vctCoffeeIcon,
    vctLampIcon,
    vctMealIcon,
    vctSparkIcon,
    vctWorldIcon,
} from "./VctIcons";

// TODO: item as template, default style and where can be modified
//     : inside class is fixed for now, text in uppercase is for modified
//     : "..." mean still has something, but it's trivial in this description
{/* <v-list-item class="v_list_item" ...>
    <div :class= ROOTITEM ...>
      <a v-if="content.href" :class= LINK ...>
        <div :class = IMG_REGION ...>
          <img v-if="hasIconSrc" class="img_size" .../>
          <div v-else v-html="content.iconHtml"></div>
        </div>
        <div id="content">
          <span :class= CONTENT ...>...</span>
        </div>
        <div>
          <slot ...></slot>
        </div>
      </a>
      <div v-else :class= LINK ...> <!-- I use 'LINK' as name because it is the same region in design, but the name can make some confuse. -->
        <div v-if="content.hasIcon"
          :class= IMG_REGION ...>
          <img v-if="hasIconSrc" class="img_size" .../>
          <div v-else v-html="content.iconHtml"></div>
        </div>
        <div id="content">
          <span :class= CONTENT ...>...</span>
        </div>
        <div>
          <slot ...></slot>
        </div>
      </div>
    </div>
    <div id="outerDiv" :class= SUBCONTENTS_OUTERDIV ...>
      <v-list v-if="content.subContents">
        <VctNvDrawerListItem ...></VctNvDrawerListItem>
      </v-list>
    </div>
  </v-list-item> */}

const StyleElemts = Object.freeze({
    paddingLeft: "padding-left",
    paddingRight: "padding-right",
    paddingBottom: "padding-bottom",
    paddingTop: "padding-top",
    margin: "margin",
    marginLeft: "margin-left",
    marginRight: "margin-right",
    display: "display",
    flexDirection: "flex-direction"
});

const base = "";
const customImgIconSize = {
    dx: 0,
    dy: 0,
    dw: 50,
    dh: 50
};

const imgSrcs = {
    Nguyen_Thi_Bao_Tran: "https://img.vietcetera.com/uploads/avatar-images/17-jul-2023/nguyen-thi-bao-tran-1689566802622.jpg",
    Mark_Manson: "https://img.vietcetera.com/uploads/images/06-may-2021/mark-manson-media-kit-hi-res-headshot-square.jpeg",
    Tuan_Anh: "https://img.vietcetera.com/uploads/avatar-images/19-feb-2024/user-1708312991012.jpg",
    Nha_Nhieu_Cot: "https://img.vietcetera.com/uploads/avatar-images/17-jun-2024/nha-nhieu-cot-1718619162766.jpg",
    Trinh_Vu_Lam_Trang: "https://img.vietcetera.com/uploads/avatar-images/03-nov-2023/user-1699007305471.jpg"
};

// const level1Style = `"{'${StyleElemts.paddingBottom}': 12 + 'px',
//  '${StyleElemts.paddingTop}': 12 + 'px',
//  '${StyleElemts.paddingLeft}': 1 + 'rem',
//  '${StyleElemts.paddingRight}': 1 + 'rem',
//  '${StyleElemts.display}': 'flex',
//  '${StyleElemts.flexDirection}': 'row'}"`;

const ItemType = Object.freeze({
    link: "a",
    text: "text"
});

const subContent_withoutIcon = {
    rootItem: "py_1 pl_2 link_primary_left link_primary_right_hover ",
    link: "text_lmInkSecondary2 styles_as_button link_itemsInRow",
    content: "typo_600_14pt defaultTextColor inline uppercase justify_center childItem_opacity width_100%",
    subContents_outerDiv: "",
    image: ""
};

const subContent_withoutIcon_left = {
    rootItem: "py_1 pl_2 link_primary_left link_primary_left_hover ",
    link: "text_lmInkSecondary2 styles_as_button link_itemsInRow",
    content: "typo_600_13pt defaultTextColor inline uppercase justify_center childItem_opacity width_100%",
    subContents_outerDiv: "",
    image: ""
};

const subContent_withIcon = {
    rootItem: "py_1 pl_2 link_primary_left link_primary_right_hover ",
    link: "text_lmInkSecondary2 styles_as_button link_itemsInRow",
    content: "ml_2 typo_600_14pt defaultTextColor inline uppercase justify_center childItem_opacity width_100%",
    subContents_outerDiv: "",
    image: ""
};

const subContent_custom1 = {
    rootItem: "flex items-center mb-2 pl-3 py-[2px]",
    link: "text_lmInkSecondary2 styles_as_button",
    content: "typo_600_14pt defaultTextColor childItem_opacity inline uppercase",
    subContents_outerDiv: "",
    image: "",
};

const content_special1 = {
    rootItem: "flex flex_direction_row item_center py_2 mb_2 w_min styles_ver_edition__6OX4j item_nvDrawer",
    link: "text_lmInkSecondary2 px_4 styles_as_button justify_center link_itemsInRow",
    content: "ml_2 typo_600_14pt defaultTextColor inline uppercase justify_center childItem_opacity width_100%",
    subContents_outerDiv: "",
    image: ""
};

const content_normal_left = {
    rootItem: "flex px_2 py_12pt item_nvDrawer",
    content: "uppercase typo_600_20pt text_nvDrawerLv1",
    subContents_outerDiv: "",
    image: ""
};
const content_normal_right = {
    rootItem: "flex px_2 py_12pt item_nvDrawer",
    content: "uppercase typo_600_20pt text_nvDrawerLv1_right",
    subContents_outerDiv: "",
    image: ""
};

export const leftNvDrawerContent = [
    {
        id: 1,
        name: "International Edition",
        title: "Vietcetera",
        // if hasIcon is true, then icon must be a html element
        hasIcon: true,
        iconHtml: vctWorldIcon,
        href: getHrefLink(base, "/en"),
        // if is custom style, then a class of it will be added, or custom style instead
        // i prefer a class that style is defined inside it
        hasCustomStyle: true,
        // default style for represent a link as button
        style: content_special1,
        level: 1,
        subContents: [
            {
                id: 1,
                name: "Cuộc sống",

                hasIcon: true,
                iconHtml: vctCoffeeIcon,
                href: getHrefLink(base, "/vn"),
                hasCustomStyle: true,
                style: subContent_withIcon,
                level: 2,
                subContents: null,
            }, {
                id: 2,
                name: "Sự nghiệp",

                hasIcon: true,
                iconHtml: vctBagIcon,
                href: getHrefLink(base, "/vn"),
                hasCustomStyle: true,
                style: subContent_withIcon,
                level: 2,
                subContents: null,
            }, {
                id: 3,
                name: "Sáng tạo",

                iconHtml: vctLampIcon,
                hasIcon: true,
                href: getHrefLink(base, "/vn"),
                hasCustomStyle: true,
                style: subContent_withIcon,
                level: 2,
                subContents: null,
            }, {
                id: 4,
                name: "Đẹp",

                iconHtml: vctSparkIcon,
                hasIcon: true,
                href: getHrefLink(base, "/vn"),
                hasCustomStyle: true,
                style: subContent_withIcon,
                level: 2,
                subContents: null,
            }, {
                id: 5,
                name: "Thưởng thức",

                iconHtml: vctMealIcon,
                hasIcon: true,
                href: getHrefLink(base, "/vn"),
                hasCustomStyle: true,
                style: subContent_withIcon,
                level: 2,
                subContents: null,
            },
        ],
    },
    {
        id: 2,
        name: "Vietcetera series",
        title: undefined,
        href: undefined,
        hasIcon: false,
        iconHtml: null,
        hasCustomStyle: true,
        style: content_normal_left,
        level: 1,
        subContents: [{
            id: 1,
            name: "Best of",
            hasIcon: false,
            iconHtml: null,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_withoutIcon,
            level: 2,
            subContents: null,
        }, {
            id: 2,
            name: "Làm việc hiệu quả",
            hasIcon: false,
            iconHtml: null,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_withoutIcon,
            level: 2,
            subContents: null,
        }, {
            id: 3,
            name: "Chất lượng sống",
            hasIcon: false,
            iconHtml: null,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_withoutIcon,
            level: 2,
            subContents: null,
        }, {
            id: 4,
            name: "Bóc term",
            hasIcon: false,
            iconHtml: null,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_withoutIcon,
            level: 2,
            subContents: null,
        }, {
            id: 5,
            name: "Thương",
            hasIcon: false,
            iconHtml: null,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_withoutIcon,
            level: 2,
            subContents: null,
        },
        ],
    },
    {
        id: 3,
        name: "Cộng đồng",
        title: undefined,
        hasIcon: false,
        iconHtml: null,
        href: undefined,
        hasCustomStyle: true,
        style: content_normal_left,
        level: 1,
        subContents: [
            {
                id: 1,
                name: "Hpv risk-control",

                hasIcon: false,
                iconHtml: null,
                href: getHrefLink(base, "/vn"),
                hasCustomStyle: true,
                style: subContent_withoutIcon,
                level: 2,
                subContents: null,
            },
        ],
    },
    {
        id: 4,
        name: "Sự kiện nổi bật",
        title: undefined,
        hasIcon: false,
        iconHtml: null,
        href: undefined,
        hasCustomStyle: true,
        style: content_normal_left,
        level: 1,
        subContents: [{
            id: 1,
            name: "Flavor Vietnam 2024",
            hasIcon: false,
            iconHtml: null,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_withoutIcon,
            level: 2,
            subContents: null,
        },
        ],
    },
    {
        id: 5,
        name: "Thành viên nổi bật",
        title: undefined,
        hasIcon: false,
        iconHtml: null,
        href: undefined,
        hasCustomStyle: true,
        style: content_normal_left,
        level: 1,
        subContents: [{
            id: 1,
            name: "Trân Trân",
            hasIcon: true,
            iconHtml: null,
            iconSrc: imgSrcs.Nguyen_Thi_Bao_Tran,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_custom1,
            level: 2,
            subContents: null,
        }, {
            id: 2,
            name: "Mark Manson",
            hasIcon: true,
            iconHtml: null,
            iconSrc: imgSrcs.Mark_Manson,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_custom1,
            level: 2,
            subContents: null,
        }, {
            id: 3,
            name: "Tuấn Anh",
            hasIcon: true,
            iconHtml: null,
            iconSrc: imgSrcs.Tuan_Anh,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_custom1,
            level: 2,
            subContents: null,
        }, {
            id: 4,
            name: "Nhà Nhiều Cột",
            hasIcon: true,
            iconHtml: null,
            iconSrc: imgSrcs.Nha_Nhieu_Cot,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_custom1,
            level: 2,
            subContents: null,
        }, {
            id: 5,
            name: "Trịnh Vũ Lam Trang",
            hasIcon: true,
            iconHtml: null,
            iconSrc: imgSrcs.Trinh_Vu_Lam_Trang,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_custom1,
            level: 2,
            subContents: null,
        },
        ],
    },
];

export const rightNvDrawerContent = [
    {
        id: 1,
        name: "phổ biến",
        title: undefined,

        href: undefined,
        hasIcon: false,
        iconHtml: null,
        hasCustomStyle: true,
        style: content_normal_right,
        level: 1,
        subContents: [{
            id: 1,
            name: "Ly hôn xanh - Hạnh phúc mong manh trong hôn nhân chóng vánh",

            hasIcon: false,
            iconHtml: null,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_withoutIcon_left,
            level: 2,
            subContents: null,
        }, {
            id: 2,
            name: "“Hiểu mình” từ những điều cơ bản nhất, tại sao không?",

            hasIcon: false,
            iconHtml: null,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_withoutIcon_left,
            level: 2,
            subContents: null,
        }, {
            id: 3,
            name: "10/40/10 - Nhịp điệu quản lý thời gian để công việc không ngập đầu",

            hasIcon: false,
            iconHtml: null,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_withoutIcon_left,
            level: 2,
            subContents: null,
        }, {
            id: 4,
            name: "Makjang là gì mà biên kịch phim Hàn thích “dí” vào kịch bản?",

            hasIcon: false,
            iconHtml: null,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_withoutIcon_left,
            level: 2,
            subContents: null,
        }, {
            id: 5,
            name: "Giải mã sức hút đằng sau Possessed Love - Chương trình hẹn hò tâm linh ",

            hasIcon: false,
            iconHtml: null,
            href: getHrefLink(base, "/vn"),
            hasCustomStyle: true,
            style: subContent_withoutIcon_left,
            level: 2,
            subContents: null,
        },
        ],
    }
]

function getHrefLink(base, path) {
    return base + path;
};

function getCanvasOfImg(imgPath) {
    const img = document.createElement('img');
    img.style.width = "50px";
    img.style.height = "50px";
    img.src = imgPath;

    img.decode().then(() => {
        const canvas = document.createElement("canvas");
        canvas.height = img.height;
        canvas.width = img.width;
        const ctx = canvas.getContext("2d");

        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);

        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0);
        //ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, customImgIconSize.dw * ratio * 2, customImgIconSize.dh * ratio);
    });

    console.log(img.innerHTML);

    //console.log(canvas.inner);
    return "";
}