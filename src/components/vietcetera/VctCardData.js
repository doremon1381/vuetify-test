const CardTypes = Object.freeze({
    Big: "big",
    Medium: "medium",
    Small: "small",
    Special: "special"
});

const ArticleCard_FooterOfTypes = Object.freeze({
    Big: {
        like: true,
        comment: true,
        bookmark: false
    },
    Medium: {
        like: false,
        comment: false,
        bookmark: true
    },
    Small: {
        like: true,
        comment: false,
        bookmark: true
    },
    Special: {
        like: false,
        comment: true,
        bookmark: false
    }
})

const imgLinks = {
    grandMarina: "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F15-jul-2024%2Fvietcetera-1-1721029162478.jpg&q=80&w=1536",
    edustation: 'https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F12-jul-2024%2Flogo-03-1720772686772.jpg&q=80&w=1536',
    opinion: "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F15-jul-2024%2F240715-tuvenu-feature-1721024553901.jpg&q=80&w=1536",
    bar: "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F26-jun-2024%2F240626-nhatky-final-1719396955186.jpg&q=80&w=1536",
    fatherAndDaughter: "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F11-jul-2024%2F6kmwj-3f-1720684847317.jpg&q=80&w=1536",
    noTitle1: "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F11-jul-2024%2Fchatluongsong-01-1720685591685.jpg&q=80&w=1536",
    cocktail: "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F28-jun-2024%2F240628-covananchoi-logo-final-1719571135349.jpg&q=80&w=1536",

}

const writerIconHrefs = {
    CaoVy: "https://img.vietcetera.com/uploads/avatar-images/17-jan-2024/cao-vy-1705462343504-160x160.jpg",
    HienLe: 'https://img.vietcetera.com/uploads/avatar-images/05-oct-2021/hien-le-1633419458852-160x160.jpg',
    NhanNhieuCot: "https://img.vietcetera.com/uploads/avatar-images/17-jun-2024/nha-nhieu-cot-1718619162766-160x160.jpg",
    SonHoang: "https://img.vietcetera.com/uploads/avatar-images/12-apr-2023/son-hoang-1681282602686-160x160.jpg",
    HoangNguyen: "https://img.vietcetera.com/uploads/avatar-images/11-dec-2020/hoang-nguyen-1607673408483-160x160.jpg",
    
}

export const vcardData = [{
    id: 1,
    writer: "Cao Vy",
    writerIconSrc: writerIconHrefs.CaoVy,
    articleTitle: "Grand Marina Saigon và định nghĩa lối sống đẳng cấp mới tại Việt Nam",
    articleImg: imgLinks.grandMarina,
    articleSubTitle: undefined,
    timeWasPublished: "5 giờ trước",
    footer: ArticleCard_FooterOfTypes.Big,
    cardType: "big"
}, {
    id: 2,
    writer: "Hiền Lê",
    writerIconSrc: writerIconHrefs.HienLe,
    articleTitle: "Làm sao để tự tin ngay cả trong những hoàn cảnh bất lợi?",
    articleImg: imgLinks.edustation,
    articleSubTitle: undefined,
    timeWasPublished: "6 giờ trước",
    footer: ArticleCard_FooterOfTypes.Big,
    cardType: "big"
}, {
    id: 3,
    writer: "Nhà nhiều cột",
    writerIconSrc: writerIconHrefs.NhanNhieuCot,
    articleTitle: "“Cấn” gì về ngành công nghiệp tự vệ nữ? ",
    articleImg: imgLinks.opinion,
    articleSubTitle: undefined,
    timeWasPublished: "6 giờ trước",
    footer: ArticleCard_FooterOfTypes.Medium,
    cardType: CardTypes.Medium
}, {
    id: 4,
    writer: "Sơn Hoàng",
    writerIconSrc: writerIconHrefs.SonHoang,
    articleTitle: "Tình bạn \"diệu\" kỳ giữa tôi và anh bartender",
    articleImg: imgLinks.bar,
    articleSubTitle: undefined,
    timeWasPublished: "14 Th 7",
    footer: ArticleCard_FooterOfTypes.Medium,
    cardType: CardTypes.Medium
}, {
    id: 5,
    writer: "Nhà Nhiều Cột",
    writerIconSrc: writerIconHrefs.NhanNhieuCot,
    articleTitle: "Chân dung người bố trên truyền hình: Lặp lại khuôn mẫu về công việc chăm sóc?",
    articleImg: imgLinks.fatherAndDaughter,
    articleSubTitle: undefined,
    timeWasPublished: "14 Th 7",
    footer: ArticleCard_FooterOfTypes.Medium,
    cardType: CardTypes.Medium
}, {
    id: 6,
    writer: "Hoàng Nguyễn",
    writerIconSrc: writerIconHrefs.HoangNguyen,
    articleTitle: "Nâng cao năng lực với 5 thói quen bồi đắp tư duy",
    articleImg: imgLinks.noTitle1,
    articleSubTitle: "Thói quen số 1: Nhận thức trung thực về năng lực hiện tại",
    timeWasPublished: "14 Th 7",
    timeToRead: "9 phút đọc",
    footer: ArticleCard_FooterOfTypes.Small,
    cardType: CardTypes.Small
}, {
    id: 7,
    writer: "Sơn Hoàng",
    writerIconSrc: writerIconHrefs.SonHoang,
    articleTitle: "\"Kệ thằng Bo, nó đến bar đọc sách chứ có làm gì đâu\"",
    articleImg: imgLinks.noTitle2,
    articleSubTitle: "Bo tìm thấy sự bình yên vô giá ở bar. Còn bạn, bạn đã đọc sách ở quán rượu bao giờ chưa?",
    timeWasPublished: "13 Th 7",
    timeToRead: "6 phút đọc",
    footer: ArticleCard_FooterOfTypes.Small,
    cardType: CardTypes.Small
}, {
    id: 8,
    writer: "Phương Thảo ",
    writerIconSrc: writerIconHrefs.PhuongThao,
    articleTitle: "5 Ly cocktail độc đáo chỉ có tại Việt Nam, bạn đã thử qua?",
    articleImg: imgLinks.cocktail,
    articleSubTitle: "Một danh sách hay ho để giới thiệu tới những người bạn nước ngoài và chính cả… người Việt.",
    timeWasPublished: "13 Th 7",
    timeToRead: "9 phút đọc",
    footer: ArticleCard_FooterOfTypes.Small,
    cardType: CardTypes.Small
}, 
]
