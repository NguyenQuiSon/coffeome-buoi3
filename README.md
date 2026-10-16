# Coffeeome

Website quán cà phê Coffeeome (HTML/CSS/JS thuần), triển khai bằng GitHub Pages.

**Trang:** Trang chủ · Giới thiệu · Menu (lọc, tìm, giỏ hàng) · Không gian · Tìm Coffeeome (liên hệ)
**SEO:** title/description/canonical/Open Graph từng trang, JSON-LD `CafeOrCoffeeShop`, `sitemap.xml`, `robots.txt`, URL thân thiện.

## Đưa lên GitHub Pages
1. Tạo repo `coffeeome`, upload toàn bộ file trong thư mục này (index.html nằm ở gốc).
2. Settings → Pages → Branch `main` / `(root)` → Save, bật **Enforce HTTPS**.
3. Chạy `python set_url.py https://TENBAN.github.io/coffeeome` để thay URL trong canonical/sitemap/robots, rồi commit lại.
4. Xem thử trên máy: `python -m http.server 8000` rồi mở http://localhost:8000

Đổi địa chỉ, giờ mở cửa, email trong footer của từng trang và hằng `EMAIL` trong `assets/app.js`.
