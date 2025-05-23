import { Calendar, Clock, MapPin } from "lucide-react";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["vietnamese"],
  weight: "400",
});

export default function Schedule() {
  return (
    <section
      id="schedule"
      className={"py-16" + " " + merriweather.className}
      style={{ backgroundColor: "#FAEEEE" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Ngày Vui Của Chúng Mình
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Lễ Vu Quy</h3>
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2 text-gray-600" />
              <p>Tư gia nữ - Hựu Thành, Trà Ôn, Vĩnh Long</p>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 mr-2 text-gray-600" />
              <p> 28 Tháng 06, 2025 </p>
            </div>
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 mr-2 text-gray-600" />
              <p>7:00</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Lễ Thành Hôn</h3>
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2 text-gray-600" />
              <p>
                Nhà hàng tiệc cưới Đường Tàu 3 - Khối 2, Núi Thành, Quảng Nam
              </p>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 mr-2 text-gray-600" />
              <p>06 Tháng 07, 2025</p>
            </div>
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 mr-2 text-gray-600" />
              <p>18:00</p>
            </div>
            <a
              href="https://maps.app.goo.gl/6U7KuGby2YXazbNg8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Xem địa chỉ trên Google Maps
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Tiệc Báo Hỷ</h3>
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2 text-gray-600" />
              <p>
                Sảnh Queen 2 - Nhà hàng tiệc cưới Queen Plaza <br /> 91B2 Phạm
                Văn Hai, Phường 3, Tân Bình, Hồ Chí Minh
              </p>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 mr-2 text-gray-600" />
              <p>12 Tháng 07, 2025</p>
            </div>
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 mr-2 text-gray-600" />
              <p>18:00</p>
            </div>
            <a
              href="https://maps.app.goo.gl/uzCxs6xiycfNsdUj8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Xem địa chỉ trên Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
