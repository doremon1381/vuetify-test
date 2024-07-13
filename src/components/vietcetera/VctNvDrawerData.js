import {
    vctBagIcon,
    vctCoffeeIcon,
    vctLampIcon,
    vctMealIcon,
    vctSparkIcon,
    vctWorldIcon,
} from "./VctIcons";

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
})

const subContentsStyle = ``;

export const leftNvDrawerContent = [
    {
        id: 1,
        name: "International Edition",
        title: "Vietcetera",
        // if itemType is "a", then href will be a string, if it's "text", then href is undefined
        itemType: ItemType.link,
        // if hasIcon is true, then icon must be a html element
        hasIcon: true,
        icon: vctWorldIcon,
        href: getHrefLink(base, "/en"),
        // if is custom style, then a class of it will be added, or custom style instead
        // i prefer a class that style is defined inside it
        hasCustomStyle: true,
        class: "flex flex_direction_row item_center px_6 w_min styles_ver_edition__6OX4j styles_as_button__tdtTw item_nvDrawer",
        style: undefined,
        level: 1,
        subContents: [{
            id: 1,
            name: "Cuộc sống",
            itemType: ItemType.link,
            hasIcon: true,
            icon: vctCoffeeIcon,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            style: "",
            level: 2,
            subContents: null,
        }, {
            id: 2,
            name: "Sự nghiệp",
            itemType: ItemType.link,
            hasIcon: true,
            icon: vctBagIcon,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined,
            class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        }, {
            id: 3,
            name: "Sáng tạo",
            itemType: ItemType.link,
            icon: vctLampIcon,
            hasIcon: true,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined,
            class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        }, {
            id: 4,
            name: "Đẹp",
            itemType: ItemType.link,
            icon: vctSparkIcon,
            hasIcon: true,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined,
            class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        }, {
            id: 5,
            name: "Thưởng thức",
            itemType: ItemType.link,
            icon: vctMealIcon,
            hasIcon: true,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined,
            class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        },
        ],
    },
    {
        id: 2,
        name: "Vietcetera series",
        title: undefined,
        itemType: ItemType.text,
        href: undefined,
        hasIcon: false,
        icon: null,
        hasCustomStyle: false,
        style: undefined,
        class: undefined,
        level: 1,
        subContents: [{
            id: 1,
            name: "Best of",
            itemType: ItemType.link,
            hasIcon: false,
            icon: null,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined,
            class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        }, {
            id: 2,
            name: "Làm việc hiệu quả",
            itemType: ItemType.link,
            hasIcon: false,
            icon: null,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined, class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        }, {
            id: 3,
            name: "Chất lượng sống",
            itemType: ItemType.link,
            hasIcon: false,
            icon: null,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined, class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        }, {
            id: 4,
            name: "Bóc term",
            itemType: ItemType.link,
            hasIcon: false,
            icon: null,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined, class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        }, {
            id: 5,
            name: "Thương",
            itemType: ItemType.link,
            hasIcon: false,
            icon: null,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined, class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        },
        ],
    },
    {
        id: 3,
        name: "Cộng đồng",
        title: undefined,
        itemType: ItemType.text,
        hasIcon: false,
        icon: null,
        href: undefined,
        hasCustomStyle: false,
        style: undefined, class: undefined,
        level: 1,
        subContents: [
            {
                id: 1,
                name: "Hpv risk-control",
                itemType: ItemType.link,
                hasIcon: false,
                icon: null,
                href: getHrefLink(base, ""),
                hasCustomStyle: true,
                style: undefined, class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
                level: 2,
                subContents: null,
            },
        ],
    },
    {
        id: 4,
        name: "Sự kiện nổi bật",
        title: undefined,
        itemType: ItemType.text,
        hasIcon: false,
        icon: null,
        href: getHrefLink(base, ""),
        hasCustomStyle: false,
        style: undefined, class: undefined,
        level: 1,
        subContents: [{
            id: 1,
            name: "Flavor Vietnam 2024",
            itemType: ItemType.link,
            hasIcon: false,
            icon: null,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined, class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        },
        ],
    },
    {
        id: 5,
        name: "Thành viên nổi bật",
        title: undefined,
        itemType: ItemType.text,
        hasIcon: false,
        icon: null,
        href: getHrefLink(base, ""),
        hasCustomStyle: true,
        style: undefined, class: "flex flex_direction_row item_center",
        level: 1,
        subContents: [{
            id: 1,
            name: "Trân Trân",
            itemType: ItemType.link,
            hasIcon: true,
            icon: null,
            iconSrc: imgSrcs.Nguyen_Thi_Bao_Tran,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined, class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        }, {
            id: 2,
            name: "Mark Manson",
            itemType: ItemType.link,
            hasIcon: true,
            icon: null,
            iconSrc: imgSrcs.Mark_Manson,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined, class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        }, {
            id: 3,
            name: "Tuấn Anh",
            itemType: ItemType.link,
            hasIcon: true,
            icon: null,
            iconSrc: imgSrcs.Tuan_Anh,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined, class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        }, {
            id: 4,
            name: "Nhà Nhiều Cột",
            itemType: ItemType.link,
            hasIcon: true,
            icon: null,
            iconSrc: imgSrcs.Nha_Nhieu_Cot,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined, class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        }, {
            id: 5,
            name: "Trịnh Vũ Lam Trang",
            itemType: ItemType.link,
            hasIcon: true,
            icon: null,
            iconSrc: imgSrcs.Trinh_Vu_Lam_Trang,
            href: getHrefLink(base, ""),
            hasCustomStyle: true,
            style: undefined, class: "flex flex_direction_row item_center px_6 w_min styles_as_button__tdtTw text_lmInkSecondary2",
            level: 2,
            subContents: null,
        },
        ],
    },
];


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