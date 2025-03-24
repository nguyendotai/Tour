export default function Slide() {
  return (
    <div className="slide w-[100%] relative">
      <img src="/banner-slide.jpeg" alt="" />
      <div className="flex justify-center items-center w-full p-4 absolute bottom-80">
        <div className="flex items-center bg-white rounded-3xl shadow-md px-4 py-2 w-full max-w-2xl">
          {/* Icon tìm kiếm */}
          <span className="text-gray-500">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>

          {/* Dropdown chọn danh mục */}
          <select
            name="category_id"
            className="border-none bg-transparent text-black font-medium mx-3 focus:outline-none"
          >
            <option value="">Tất cả</option>
          </select>

          {/* Gạch dọc phân cách */}
          <span className="w-px h-6 bg-gray-300 mx-2"></span>

          {/* Input tìm kiếm */}
          <input
            type="search"
            placeholder="Bạn muốn đi đâu"
            className="flex-grow border-none focus:outline-none text-gray-500 text-lg placeholder-gray-400"
          />

          {/* Nút tìm kiếm */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full">
            Khám phá
          </button>
        </div>
      </div>
    </div>
  );
}
