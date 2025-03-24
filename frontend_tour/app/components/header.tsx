import Menu from "./menu";
export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-[1300px] mx-auto gap-5 flex items-center justify-between py-3 px-4 ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/Logo.png" alt="Luxtours" className="h-8" />
        </div>

        {/* Tìm kiếm */}
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="min-w-[300px] px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:ring-0 focus:outline-none"
          />
        </div>

        {/* Liên kết */}
        <div className="flex items-center gap-4">
          <span className="">❤️ Khách hàng cảm nhận</span>
          <span className="">👥 Tuyển dụng</span>

          {/* Ngôn ngữ */}
          <div className="flex items-center gap-2">
            <img src="/vietnam.png" alt="Vietnamese" className="h-5 w-7" />
            <img src="/usa.png" alt="English" className="h-5 w-7" />
          </div>

          {/* Hotline */}
          <div className="flex items-center gap-2 border border-b-neutral-500 px-3 py-1 rounded-lg">
            <span className="text-gray-500">📞Hotline:</span>
            <span className="font-semibold">0332 466 408</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto flex items-center justify-between py-3 px-4 ">
          <div className="tab flex gap-5 justify-center items-center">
              <button className="text-xl">☰</button>
              <div>Địa điểm hấp dẫn ▼</div>
          </div>
          <Menu></Menu>
        {/* Nút đặt tour */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Liên hệ đặt tour
        </button>
      </div>
    </header>
  );
}
