# 🍚 Admin Dashboard CRUD - ReactJS + Vite

Ứng dụng quản lý CRUD hoàn chỉnh với 3 module: **Bánh Tráng**, **Nước Mắm**, **Topping**.

Xây dựng bằng **ReactJS + Vite + Ant Design + Axios + React Router + React Toastify**.

## ✨ Tính Năng

✅ **3 Module CRUD** - Bánh Tráng, Nước Mắm, Topping  
✅ **Admin Sidebar** - Menu điều hướng sang các trang  
✅ **Login Page** - Trang đăng nhập đơn giản  
✅ **CRUD Operations** - Create, Read, Update, Delete  
✅ **Table & Modal** - Hiển thị & quản lý dữ liệu  
✅ **Form Validation** - Kiểm tra dữ liệu đầu vào  
✅ **Toast Notifications** - Thông báo kết quả thao tác  
✅ **Popconfirm** - Xác nhận trước khi xóa  
✅ **Loading States** - Hiển thị trạng thái tải  
✅ **Responsive Design** - Tương thích mọi thiết bị

## 🛠️ Tech Stack

| Công Nghệ          | Phiên Bản | Mục Đích           |
| ------------------ | --------- | ------------------ |
| **React**          | ^18.2.0   | Frontend framework |
| **Vite**           | ^5.0.8    | Build tool         |
| **Ant Design**     | ^5.13.0   | UI components      |
| **Axios**          | ^1.6.2    | HTTP client        |
| **React Router**   | ^6.20.0   | Routing            |
| **React Toastify** | ^10.0.0   | Notifications      |

## 📁 Cấu Trúc Thư Mục

```
src/
├── components/              # Components tái sử dụng
├── layouts/
│   └── AdminLayout.jsx      # Layout admin với sidebar
├── pages/
│   ├── banhtrang/
│   │   └── index.jsx        # CRUD Bánh Tráng
│   ├── nuocmam/
│   │   └── index.jsx        # CRUD Nước Mắm
│   ├── topping/
│   │   └── index.jsx        # CRUD Topping
│   └── login/
│       └── index.jsx        # Login page
├── App.jsx                  # Router chính
├── main.jsx                 # Entry point
└── index.css               # Global styles
```

## 🚀 Bắt Đầu

### 1. Cài Đặt Dependencies

```bash
npm install
```

### 2. Chạy Development Server

```bash
npm run dev
```

Truy cập `http://localhost:5173`

### 3. Build Production

```bash
npm run build
```

## 🔐 Đăng Nhập

- **Username**: bất kỳ
- **Password**: bất kỳ

## 📊 3 Module CRUD

### 1️⃣ Bánh Tráng

**Fields**: name, description, price

```
API: https://mockapi.io/api/banhtrang
```

### 2️⃣ Nước Mắm

**Fields**: name, spicyLevel, description

```
API: https://mockapi.io/api/nuocmam
```

### 3️⃣ Topping

**Fields**: name, quantity, price

```
API: https://mockapi.io/api/topping
```

## 💡 Coding Style

Tất cả trang CRUD theo style tiêu chuẩn:

```javascript
const fetchData = async () => {
  setLoading(true);
  try {
    const response = await axios.get(API_URL);
    setData(response.data);
  } catch (error) {
    toast.error("❌ Lỗi tải dữ liệu");
  } finally {
    setLoading(false);
  }
};

const handleSubmitForm = async (values) => {
  try {
    if (selectedRecord) {
      await axios.put(`${API_URL}/${selectedRecord.id}`, values);
      toast.success("✅ Cập nhật thành công!");
    } else {
      await axios.post(API_URL, values);
      toast.success("✅ Thêm mới thành công!");
    }
    fetchData();
    setModalVisible(false);
    form.resetFields();
  } catch (error) {
    toast.error("❌ Lỗi");
  }
};
```

## 📝 Các File Quan Trọng

| File                            | Mô Tả                          |
| ------------------------------- | ------------------------------ |
| `src/App.jsx`                   | Router chính, navigation setup |
| `src/layouts/AdminLayout.jsx`   | Layout với sidebar menu        |
| `src/pages/banhtrang/index.jsx` | CRUD Bánh Tráng                |
| `src/pages/nuocmam/index.jsx`   | CRUD Nước Mắm                  |
| `src/pages/topping/index.jsx`   | CRUD Topping                   |
| `src/pages/login/index.jsx`     | Login page                     |

## 🎯 Checklist

- [x] 3 trang CRUD đầy đủ
- [x] Admin Sidebar layout
- [x] Login page
- [x] React Router navigation
- [x] Table + Modal form
- [x] CRUD operations (Create, Read, Update, Delete)
- [x] Toast notifications
- [x] Form validation
- [x] Loading states
- [x] Popconfirm delete
- [x] Responsive design

## 📖 Chi Tiết File

### BanhTrangPage (src/pages/banhtrang/index.jsx)

Trang quản lý Bánh Tráng với:

- Fetch dữ liệu từ MockAPI
- Hiển thị table với columns: name, description, price
- Button Sửa/Xóa cho mỗi row
- Modal form thêm/sửa
- Form validation
- Toast notifications

### NuocMamPage (src/pages/nuocmam/index.jsx)

Trang quản lý Nước Mắm với:

- Fetch dữ liệu từ MockAPI
- Table hiển thị: name, spicyLevel, description
- Select dropdown cho spicyLevel
- CRUD operations

### ToppingPage (src/pages/topping/index.jsx)

Trang quản lý Topping với:

- Fetch dữ liệu từ MockAPI
- Table hiển thị: name, quantity, price
- InputNumber cho quantity và price
- CRUD operations

### AdminLayout (src/layouts/AdminLayout.jsx)

Layout chính với:

- Fixed Sidebar menu
- Collapsible menu
- Header với logout button
- Content area
- Footer

### App.jsx

Router setup với:

- BrowserRouter
- 3 trang CRUD
- Login page
- Protected routes (AdminLayout)

## 🌐 Mock API Setup

Sử dụng MockAPI.io:

1. Đăng ký tại [mockapi.io](https://mockapi.io)
2. Tạo 3 API endpoints:
   - `/api/banhtrang`
   - `/api/nuocmam`
   - `/api/topping`
3. Mỗi endpoint tự động support CRUD

## 🐛 Troubleshooting

**Lỗi CORS?**

- Kiểm tra MockAPI endpoint
- Đảm bảo internet connection

**Module not found?**

```bash
rm -rf node_modules package-lock.json
npm install
```

**Port đã bị sử dụng?**

```bash
npm run dev -- --port 3000
```

## 📚 Tài Liệu Tham Khảo

- [React](https://react.dev)
- [Ant Design](https://ant.design)
- [Axios](https://axios-http.com)
- [React Router](https://reactrouter.com)
- [React Toastify](https://fkhadra.github.io/react-toastify)

## 📋 Script Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

**Built with ❤️ using React, Vite, Ant Design, Axios & React Toastify**

Happy Coding! 🎉
→ Nhập dữ liệu
→ Click "Thêm"
→ API POST
→ Toast success
→ Reload list

```

### 2. **Read (Xem)**

```

Component mount
→ useEffect
→ API GET
→ Set state
→ Table render

```

### 3. **Update (Sửa)**

```

Click "Sửa"
→ Modal mở với data cũ
→ Chỉnh sửa
→ Click "Cập nhật"
→ API PUT
→ Toast success
→ Reload list

```

### 4. **Delete (Xóa)**

```

Click "Xóa"
→ Confirm dialog
→ Click confirm
→ API DELETE
→ Toast success
→ Reload list

````

## 📱 Responsive Design

Ứng dụng hỗ trợ:

- ✔️ Desktop
- ✔️ Tablet
- ✔️ Mobile

Nhờ Ant Design responsive grid system

## 🐛 Troubleshooting

### Lỗi "Cannot find module"

```bash
rm -rf node_modules
npm install
````

### Port 5173 đã được sử dụng

Vite sẽ tự động sử dụng port khác, hoặc chỉ định port:

```bash
npm run dev -- --port 3000
```

### API không kết nối

- Kiểm tra internet connection
- Kiểm tra URL API
- Mở Chrome DevTools → Network tab

## 📚 Tài Liệu Tham Khảo

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Ant Design](https://ant.design)
- [Axios Docs](https://axios-http.com)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

## 💡 Tips & Best Practices

1. **Luôn validate input** trước khi submit
2. **Kiểm tra error** từ API response
3. **Sử dụng loading state** cho UX tốt hơn
4. **Toast notifications** để feedback tốt
5. **Responsive design** từ đầu

## 📄 License

Dự án này là mã nguồn mở, miễn phí sử dụng.

---

**Tác Giả**: AI Assistant  
**Ngày Tạo**: 2024  
**Phiên Bản**: 1.0.0

Chúc bạn coder vui vẻ! 🚀
