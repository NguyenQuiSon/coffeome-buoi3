# Coffeeome – Mã tối ưu On-page (dán vào repo GitHub Pages)

Các giá trị lấy đúng từ Bảng 3.1 trong file PDF. Tên file/front matter có thể khác tùy cấu trúc repo của bạn, hãy đối chiếu rồi dán vào.

## 1. Title, meta, canonical cho từng trang (phần `<head>` hoặc front matter)

### Trang chủ (/coffeeome/)
```html
<title>Coffeeome – Quán cà phê TP.HCM, không gian làm việc có wifi</title>
<meta name="description" content="Quán cà phê Coffeeome ở Quận 1, TP.HCM: cà phê sữa đá, latte, trà đào cam sả cùng không gian yên tĩnh, có wifi để làm việc, học bài. Xem menu ngay!">
<link rel="canonical" href="https://nguyenquison.github.io/coffeeome/">
<meta property="og:url" content="https://nguyenquison.github.io/coffeeome/">
<meta property="og:image" content="https://nguyenquison.github.io/coffeeome/assets/og-coffeeome.jpg">
<meta name="twitter:card" content="summary_large_image">
```

### Giới thiệu (/coffeeome/gioi-thieu/)
```html
<title>Giới thiệu Coffeeome – Quán cà phê hạt Tây Nguyên rang thủ công</title>
<meta name="description" content="Câu chuyện, giá trị cốt lõi và hành trình 2024–2026 của Coffeeome – quán cà phê TP.HCM dùng hạt Tây Nguyên rang thủ công, pha chế như cho người thân.">
<link rel="canonical" href="https://nguyenquison.github.io/coffeeome/gioi-thieu/">
```
H1: `Giới thiệu Coffeeome`

### Menu (/coffeeome/menu/)
```html
<title>Menu quán cà phê Coffeeome – Cà phê sữa đá, trà đào cam sả</title>
<meta name="description" content="Menu quán cà phê Coffeeome: cà phê sữa đá 39.000đ, trà đào cam sả 52.000đ, latte, đá xay và bánh ngọt. Giá từ 35.000đ, chọn món và thêm vào giỏ.">
<link rel="canonical" href="https://nguyenquison.github.io/coffeeome/menu/">
```
H1: `Menu quán cà phê Coffeeome`; thêm H2 `Cà phê`, `Trà`, `Đá xay`, `Bánh` trước nhóm món tương ứng (tên món giữ H3).

### Không gian (/coffeeome/khong-gian/)
```html
<title>Không gian Coffeeome – Quán cà phê làm việc, sân vườn, có wifi</title>
<meta name="description" content="Khám phá không gian quán cà phê Coffeeome ở Quận 1: góc cửa sổ, quầy bar, sân vườn xanh mát và góc làm việc yên tĩnh có wifi mạnh, nhiều ổ điện.">
<link rel="canonical" href="https://nguyenquison.github.io/coffeeome/khong-gian/">
```
H1: `Không gian quán cà phê làm việc có wifi tại Coffeeome`. Sửa 4 dòng đang viết dạng `*### Góc cửa sổ*` thành `## Góc cửa sổ`, `## Quầy bar`, `## Sân vườn`, `## Góc làm việc có wifi` (bỏ dấu `*`).

### Tìm Coffeeome (/coffeeome/tim-coffeeome/)
```html
<title>Địa chỉ, giờ mở cửa & đặt bàn Coffeeome – Quán cà phê Quận 1</title>
<meta name="description" content="Coffeeome: 12 Đường Cà Phê, Quận 1, TP.HCM, mở cửa 07:00–22:00 mỗi ngày. Xem địa chỉ, chỗ giữ xe miễn phí và gửi form đặt bàn quán cà phê.">
<link rel="canonical" href="https://nguyenquison.github.io/coffeeome/tim-coffeeome/">
```
H1: `Địa chỉ, giờ mở cửa và đặt bàn Coffeeome`; H2: `Đặt bàn & liên hệ`, `Hỏi đáp thường gặp`.

## 2. Sửa lỗi chung
- Thẻ `<html>` đổi thành `<html lang="vi">`.
- Menu "Trang chủ" trên trang chủ: `href="/coffeeome/"` (hiện đang rỗng).
- Logo: `<img src="assets/logo.svg" alt="Logo Coffeeome – quán cà phê TP.HCM">`
- Emoji trang trí: `<span aria-hidden="true">☕</span>`
- Ảnh món/không gian: `<img src="assets/cafe-sua-da.webp" alt="Cà phê sữa đá Coffeeome" loading="lazy" width="400" height="300">`
- Form đặt bàn: thêm `<input type="date">`, `<input type="time">`, `<input type="number" min="1">` (số khách).
- Bản đồ: `<iframe title="Bản đồ chỉ đường đến Coffeeome" src="(link nhúng Google Maps)" loading="lazy"></iframe>`

## 3. JSON-LD (dán vào trang chủ và trang Tìm Coffeeome)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Coffeeome",
  "url": "https://nguyenquison.github.io/coffeeome/",
  "image": "https://nguyenquison.github.io/coffeeome/assets/og-coffeeome.jpg",
  "servesCuisine": "Cà phê, trà, đá xay, bánh",
  "priceRange": "35.000đ - 59.000đ",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Đường Cà Phê",
    "addressLocality": "Quận 1",
    "addressRegion": "TP.HCM",
    "addressCountry": "VN"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "07:00", "closes": "22:00"
  }]
}
</script>
```

FAQPage cho trang Tìm Coffeeome:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Có chỗ giữ xe không?",
     "acceptedAnswer": {"@type": "Answer", "text": "Có, miễn phí cho khách."}},
    {"@type": "Question", "name": "Có đặt bàn trước được không?",
     "acceptedAnswer": {"@type": "Answer", "text": "Được, khách gửi form liên hệ trên trang này."}}
  ]
}
</script>
```

## 4. Nội dung mẫu để đăng backlink (tự đăng bằng tài khoản của bạn)

**Bài Blogger – "Cách pha cà phê sữa đá tại nhà" (khoảng 250 từ, tự viết lại bằng giọng của bạn)**
Gợi ý dàn ý: 1) nguyên liệu (cà phê Robusta rang vừa, sữa đặc, đá); 2) pha phin 3 bước; 3) mẹo tỉ lệ; 4) kết bài: "Nếu chưa tiện pha tại nhà, bạn có thể thử [cà phê sữa đá Coffeeome](https://nguyenquison.github.io/coffeeome/menu/)".

**Bài đăng Facebook Page**
"Coffeeome – hương vị cà phê, không gian của riêng bạn ☕ Xem menu và địa chỉ tại https://nguyenquison.github.io/coffeeome/ #coffeeome #quancaphe"

**README trên GitHub**
```md
## Coffeeome
Website quán cà phê TP.HCM (bài thực hành SEO): [Coffeeome](https://nguyenquison.github.io/coffeeome/)
```
