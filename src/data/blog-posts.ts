export type BlogPost = {
  id: number;
  title: string;
  date: string;
  content: string;
  likes: string;
  comments: string;
  shares: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Vừa ra trường đã... lấy vợ: Khi 'Senior' của cuộc đời hơn mình 6 tuổi",
    date: "27 Tháng 12, 2025",
    content: `Người ta thường nói, sau khi tốt nghiệp **Đại học Duy Tân**, việc quan trọng nhất là tìm một "Offer" xịn. Nhưng với mình, mình đã tìm thấy "Bản hợp đồng" quan trọng nhất đời mình từ trước khi cầm tấm bằng trên tay.
    
Hôm nay, gác lại những dòng code React hay Next.js, mình muốn chia sẻ về một hành trình khác: **Hành trình trở thành người đàn ông của gia đình.**

**1. Khoảng cách 6 tuổi: Khi số tuổi chỉ là một "Variable"**  
Vợ mình – Ngọc Anh – hơn mình 6 tuổi. Trong thế giới lập trình, 6 năm có thể là khoảng cách giữa một công nghệ cũ và một Framework hiện đại. Nhưng trong tình yêu, 6 năm ấy lại là sự bù trừ hoàn hảo.

Cô ấy mang đến sự điềm tĩnh, thấu hiểu và kinh nghiệm của một người đã va chạm với đời. Còn mình mang đến sự nhiệt huyết, năng nổ và cả cái "liều" của một chàng trai vừa ra trường. Chúng mình không nhìn vào con số, chúng mình nhìn vào sự **đồng nhất về tần số (Frequency Compatibility).**`,
    likes: "3.2K",
    comments: "450",
    shares: "128",
  },
  {
    id: 2,
    title: "Từ Đà Nẵng đến Hà Nội: Hành trình tìm kiếm 'Art' trong những dòng Code",
    date: "23 Tháng 12, 2025",
    content: `Chào mọi người, mình là **Viết Đức** (hay còn được biết đến với cái tên **DUCTV**).

Nếu bạn đang đọc những dòng này, có lẽ chúng ta có chung một niềm đam mê: **Sự giao thoa giữa logic và thẩm mỹ.** Mình vừa khép lại 4 năm rực rỡ tại **Đại học Duy Tân (DTU)** với tấm bằng Kỹ thuật phần mềm trên tay. Nhưng thay vì chọn một bến đỗ quen thuộc tại quê hương Đà Nẵng, mình đã quyết định xách balo ra Hà Nội – bắt đầu hành trình "tầm sư học đạo" tại **Weebuild Viet Nam**.

**Rời xa vùng an toàn**  
Hà Nội đón mình bằng cái lạnh đặc trưng và nhịp sống hối hả, rất khác với sự bình yên của biển Mỹ Khê. Tại đây, mình may mắn được làm việc và học hỏi dưới sự dẫn dắt của những "người anh" Senior dày dặn kinh nghiệm.

Hành trình này không chỉ là thay đổi địa lý, mà là bước ngoặt để mình nâng cấp tư duy từ một sinh viên sang một **Software Engineer** thực thụ.`,
    likes: "1.8K",
    comments: "215",
    shares: "85",
  },
  {
    id: 3,
    title: "Tại sao lại là Đà Nẵng? Nơi 'Sóng Biển' Gặp Gỡ 'Dòng Code'",
    date: "22 Tháng 12, 2025",
    content: `Có người hỏi mình: _"Tại sao không chọn Sài Gòn sôi động hay ở lại hẳn Thủ đô để thăng tiến, mà lại luôn hướng về Đà Nẵng?"_

Với mình, Đà Nẵng không chỉ là nơi mình sinh ra hay lớn lên, mà đó là thành phố của sự **cân bằng** – một yếu tố sống còn đối với một người làm nghề sáng tạo và kỹ thuật như lập trình viên.

**1. Trạm sạc năng lượng cho tâm hồn**  
Lập trình là một công việc tiêu tốn rất nhiều năng lượng não bộ. Những lúc đối mặt với một chiếc Bug "khó nhằn" hay một Logic phức tạp, việc được chạy xe dọc con đường biển Võ Nguyên Giáp, hít hà mùi muối mặn và nghe tiếng sóng vỗ là cách mình "reset" bản thân nhanh nhất.

**2. Hệ sinh thái IT đang "chuyển mình" mạnh mẽ**  
Nhiều người lầm tưởng Đà Nẵng chỉ mạnh về du lịch. Nhưng thực tế, những năm gần đây, thành phố quê hương mình đang dần trở thành một **"Silicon Valley" của miền Trung**. Từ những ngày còn ngồi trên ghế nhà trường tại Đại học Duy Tân, mình đã thấy sự gắn kết trong cộng đồng anh em Developer miền Trung thật sự rất tuyệt vời.`,
    likes: "2.5K",
    comments: "530",
    shares: "150",
  },
];
