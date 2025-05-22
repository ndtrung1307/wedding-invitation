import Image from "next/image";

import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["vietnamese"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["vietnamese"], weight: "400" });

export default function Couple() {
  return (
    <section id="couple" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Cặp Đôi Hạnh Phúc
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <Image
              src="/TINK2179.JPG?height=300&width=300"
              alt="Groom"
              width={300}
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3
              className={`text-5xl font-semibold mb-2 ${greatVibes.className}`}
            >
              Nguyễn Đình Trung
            </h3>
            <p className={`text-gray-700 ${playfair.className}`}>
              Trần Quốc Anh là một diễn viên trẻ đầy đam mê và tài năng, luôn nỗ
              lực hết mình để khắc họa từng vai diễn một cách sống động và chân
              thật. Khi không đang tập trung vào nghệ thuật, anh thích khám phá
              những góc văn hóa mới, thưởng thức âm nhạc và thư giãn cùng bạn
              bè. Sự nhiệt huyết, sáng tạo và tinh thần chân thành của anh đã
              tạo nên một con người không chỉ xuất sắc trên màn ảnh mà còn là
              một người bạn đời tuyệt vời.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/TINK2000.JPG?height=300&width=300"
              alt="Bride"
              width={300}
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3
              className={`text-5xl font-semibold mb-2 ${greatVibes.className}`}
            >
              Lê Ngọc Trân
            </h3>
            <p className={`text-gray-700 ${playfair.className}`}>
              Trần Tiểu Vy là biểu tượng của vẻ đẹp duyên dáng và phong cách
              tinh tế. Được biết đến qua những thành công trên sân khấu sắc đẹp,
              cô còn truyền cảm hứng qua các hoạt động xã hội và nghệ thuật. Khi
              có thời gian, Tiểu Vy thích vẽ tranh, khám phá những quán cà phê
              độc đáo và chia sẻ niềm đam mê với cuộc sống. Sự thanh lịch, lòng
              nhân hậu và sức sống tràn đầy của cô luôn lan tỏa niềm vui đến mọi
              người xung quanh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
