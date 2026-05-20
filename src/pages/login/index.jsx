import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ identifier: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Đăng nhập với:", formData);
    // Xử lý logic đăng nhập tại đây
  };

  return (
    <div className="min-h-screen bg-[#FDF5E6] flex flex-col justify-center items-center p-4 font-sans">
      {/* Khung đăng nhập chính */}
      <div className="w-full max-w-[450px] bg-white rounded-2xl shadow-xl border border-[#E8D5B5] overflow-hidden">
        
        {/* Header của Form với màu Đỏ Mắm đặc trưng */}
        <div className="bg-[#8B2D1F] p-8 text-center relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#A63D2D]"></div>
          <h1 className="text-2xl font-serif font-bold text-[#F5E6CA] uppercase tracking-widest">
            Hương Vị Quê
          </h1>
          <p className="text-[#D9C5A3] text-sm mt-2 font-light">Chào mừng bạn quay trở lại</p>
        </div>

        {/* Nội dung Form */}
        <div className="p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Trường Email/SĐT */}
            <div>
              <label className="block text-xs font-semibold text-[#5C2D1B] uppercase mb-1.5 ml-1">
                Email hoặc Số điện thoại
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#A63D2D] group-focus-within:text-[#8B2D1F]" />
                </div>
                <input
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-[#D9C5A3] rounded-xl leading-5 bg-[#FFFBF5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A63D2D] focus:border-transparent transition duration-200"
                  placeholder="Nhập email hoặc SĐT..."
                  onChange={(e) => setFormData({...formData, identifier: e.target.value})}
                />
              </div>
            </div>

            {/* Trường Mật khẩu */}
            <div>
              <div className="flex justify-between mb-1.5 ml-1">
                <label className="text-xs font-semibold text-[#5C2D1B] uppercase">Mật khẩu</label>
                <a href="#" className="text-xs font-bold text-[#A63D2D] hover:text-[#8B2D1F]">Quên?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#A63D2D] group-focus-within:text-[#8B2D1F]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full pl-10 pr-12 py-3 border border-[#D9C5A3] rounded-xl leading-5 bg-[#FFFBF5] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A63D2D] focus:border-transparent transition duration-200"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
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

            {/* Ghi nhớ đăng nhập */}
            <div className="flex items-center ml-1">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-[#A63D2D] focus:ring-[#A63D2D] border-[#D9C5A3] rounded cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-[#5C2D1B] cursor-pointer">
                Duy trì đăng nhập
              </label>
            </div>

            {/* Nút Đăng nhập */}
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#A63D2D] hover:bg-[#8B2D1F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A63D2D] transition-all duration-300 shadow-lg hover:shadow-[#A63D2D]/30"
            >
              ĐĂNG NHẬP
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Ngăn cách Hoặc */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E8D5B5]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-3 bg-white text-gray-400 font-medium">Hoặc đăng nhập bằng</span>
            </div>
          </div>

          {/* Đăng nhập MXH */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center py-2.5 border border-[#D9C5A3] rounded-xl hover:bg-[#FFFBF5] transition duration-200 shadow-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5 mr-2" alt="Google" />
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center py-2.5 border border-[#D9C5A3] rounded-xl hover:bg-[#FFFBF5] transition duration-200 shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" className="h-5 w-5 mr-2" alt="FB" />
              <span className="text-sm font-medium text-gray-700">Facebook</span>
            </button>
          </div>

          {/* Footer chuyển sang đăng ký */}
          <p className="mt-10 text-center text-sm text-gray-600">
            Chưa có tài khoản?{' '}
            <a href="#" className="font-bold text-[#A63D2D] hover:text-[#8B2D1F] underline-offset-4 hover:underline">
              Đăng ký ngay
            </a>
          </p>
        </div>
      </div>

      {/* Thông tin hỗ trợ dưới cùng */}
      <div className="mt-8 text-[#8B2D1F]/60 text-xs flex gap-4 uppercase tracking-widest font-semibold">
        <a href="#" className="hover:text-[#8B2D1F]">Trang chủ</a>
        <span>•</span>
        <a href="#" className="hover:text-[#8B2D1F]">Hỗ trợ</a>
        <span>•</span>
        <a href="#" className="hover:text-[#8B2D1F]">Chính sách</a>
      </div>
    </div>
  );
};

export default LoginPage;