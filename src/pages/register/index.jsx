import React, { useState } from 'react';
import { User, Mail, Lock, Phone, Eye, EyeOff, ArrowRight } from 'lucide-react';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Mật khẩu xác nhận không trùng khớp!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Đăng ký thành công!");
                console.log(data);
            } else {
                alert(data.message || "Đăng ký thất bại!");
            }
        } catch (error) {
            console.error(error);
            alert("Lỗi kết nối server!");
        };
    }

    return (
        <div className="min-h-screen bg-[#FDF5E6] flex flex-col justify-center items-center p-4 font-sans">
            {/* Khung đăng ký chính */}
            <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-xl border border-[#E8D5B5] overflow-hidden my-4">

                {/* Header với màu Đỏ Mắm đồng bộ */}
                <div className="bg-[#8B2D1F] p-6 text-center relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#A63D2D]"></div>
                    <h1 className="text-2xl font-serif font-bold text-[#F5E6CA] uppercase tracking-widest">
                        Hương Vị Quê
                    </h1>
                    <p className="text-[#D9C5A3] text-sm mt-1 font-light">Tạo tài khoản mới để nhận ưu đãi đặc sản</p>
                </div>

                {/* Nội dung Form */}
                <div className="p-8 sm:p-10">
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Họ và Tên */}
                        <div>
                            <label className="block text-xs font-semibold text-[#5C2D1B] uppercase mb-1 ml-1">
                                Họ và Tên
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-[#A63D2D]" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="block w-full pl-10 pr-3 py-2.5 border border-[#D9C5A3] rounded-xl bg-[#FFFBF5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A63D2D] focus:border-transparent transition duration-200 text-sm"
                                    placeholder="Nguyễn Văn A"
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Số điện thoại */}
                        <div>
                            <label className="block text-xs font-semibold text-[#5C2D1B] uppercase mb-1 ml-1">
                                Số điện thoại
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-[#A63D2D]" />
                                </div>
                                <input
                                    type="tel"
                                    required
                                    pattern="[0-9]{10}"
                                    className="block w-full pl-10 pr-3 py-2.5 border border-[#D9C5A3] rounded-xl bg-[#FFFBF5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A63D2D] focus:border-transparent transition duration-200 text-sm"
                                    placeholder="0912345678"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xs font-semibold text-[#5C2D1B] uppercase mb-1 ml-1">
                                Địa chỉ Email (Không bắt buộc)
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-[#A63D2D]" />
                                </div>
                                <input
                                    type="email"
                                    className="block w-full pl-10 pr-3 py-2.5 border border-[#D9C5A3] rounded-xl bg-[#FFFBF5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A63D2D] focus:border-transparent transition duration-200 text-sm"
                                    placeholder="name@example.com"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Mật khẩu */}
                        <div>
                            <label className="block text-xs font-semibold text-[#5C2D1B] uppercase mb-1 ml-1">
                                Mật khẩu
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-[#A63D2D]" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    minLength={6}
                                    className="block w-full pl-10 pr-12 py-2.5 border border-[#D9C5A3] rounded-xl bg-[#FFFBF5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A63D2D] focus:border-transparent transition duration-200 text-sm"
                                    placeholder="Tối thiểu 6 ký tự"
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#A63D2D]"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Xác nhận mật khẩu */}
                        <div>
                            <label className="block text-xs font-semibold text-[#5C2D1B] uppercase mb-1 ml-1">
                                Xác nhận mật khẩu
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-[#A63D2D]" />
                                </div>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    className="block w-full pl-10 pr-12 py-2.5 border border-[#D9C5A3] rounded-xl bg-[#FFFBF5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A63D2D] focus:border-transparent transition duration-200 text-sm"
                                    placeholder="Nhập lại mật khẩu"
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#A63D2D]"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Điều khoản chính sách */}
                        <div className="flex items-start pt-1 ml-1">
                            <input
                                id="terms"
                                type="checkbox"
                                required
                                className="mt-0.5 h-4 w-4 text-[#A63D2D] focus:ring-[#A63D2D] border-[#D9C5A3] rounded cursor-pointer"
                            />
                            <label htmlFor="terms" className="ml-2 block text-xs text-gray-600 leading-normal cursor-pointer">
                                Tôi đồng ý với các <a href="#" className="text-[#A63D2D] font-bold hover:underline">Điều khoản dịch vụ</a> và <a href="#" className="text-[#A63D2D] font-bold hover:underline">Chính sách bảo mật</a> của cửa hàng.
                            </label>
                        </div>

                        {/* Nút Đăng ký */}
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#A63D2D] hover:bg-[#8B2D1F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A63D2D] transition-all duration-300 shadow-lg hover:shadow-[#A63D2D]/30 mt-2"
                        >
                            ĐĂNG KÝ NGAY
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    {/* Quay lại Đăng nhập */}
                    <p className="mt-8 text-center text-sm text-gray-600">
                        Đã có tài khoản rồi?{' '}
                        <a href="#" className="font-bold text-[#A63D2D] hover:text-[#8B2D1F] underline-offset-4 hover:underline">
                            Đăng nhập tại đây
                        </a>
                    </p>
                </div>
            </div>

            {/* Footer nhỏ đồng bộ */}
            <div className="text-[#8B2D1F]/60 text-xs flex gap-4 uppercase tracking-widest font-semibold mb-4">
                <a href="#" className="hover:text-[#8B2D1F]">Trang chủ</a>
                <span>•</span>
                <a href="#" className="hover:text-[#8B2D1F]">Trợ giúp</a>
            </div>
        </div>
    );
};

export default RegisterPage;