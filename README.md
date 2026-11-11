# Slug Fashion 
Bài tập Slug

---

## Danh mục cấu trúc các file chính
```text
LearnAngular 2/
├── my-server-mongodb/
│   ├── index.js                     # API /fashions/slug/:slug, logic createSlug & cấp IdF
│   └── package.json                 # Phụ thuộc backend (express, mongodb, cors...)
├── my-app/
│   ├── proxy.conf.json              # Cấu hình proxy trỏ về http://localhost:3002
│   └── src/app/
│       ├── app-module.ts            # Khai báo component & routing
│       ├── app-routing-module.ts    # Route { path: 'fashion-detail/:slug', component: ... }
│       ├── fashion-apiservice.ts    # Service gọi API getFashionBySlug(slug)
│       ├── classes/
│       │   └── Fashion.ts           # Model khai báo thêm trường IdF và slug
│       ├── fashion-component/       # Danh sách hiển thị kèm link routerLink slug
│       ├── fashion-detail-component/# Component chi tiết đọc slug từ URL
│       └── fashion-update-component/# Form cập nhật / thêm mới
└── README.md
