import Image from "next/image";

import { Corinthia, Merriweather } from "next/font/google";

const corinthia = Corinthia({
  subsets: ["vietnamese"],
  weight: "400",
  variable: "--font-imperial-script",
});
const merriweather = Merriweather({
  subsets: ["vietnamese"],
  weight: "400",
});

export default function Couple() {
  return (
    <section
      id="couple"
      className="py-16"
      style={{ backgroundColor: "#FAEEEE", color: "#45384B" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/TINK2179-min.jpg?height=300&width=300"
              alt="Groom"
              width={300}
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className={`text-2xl mb-2 text-center ${corinthia.className}`}>
              Chú Rể
            </h3>
            <h3
              className={`text-5xl font-semibold mb-2 text-center ${corinthia.className}`}
            >
              Nguyễn Đình Trung
            </h3>
            <p className={`text-justify ${merriweather.className}`}>
              “Cảm ơn em.
              <br />
              Cảm ơn em đã không unfriend anh từ lần rep story đầu tiên.
              <br />
              Cảm ơn em đã chịu đựng một thanh niên suốt ngày ôm laptop, thỉnh
              thoảng nói chuyện như code, nhưng yêu thì thật lòng.
              <br />
              Cảm ơn vì đã không bỏ chạy mỗi lần anh khó ưa, đã đồng hành, đã
              thương anh – và giờ… còn chịu cưới nữa!
              <br />
              Cảm ơn em vì đã đến và chịu ở lại!”
            </p>
          </div>
          <div>
            <Image
              src="/TINK2005.jpg?height=300&width=300"
              alt="Bride"
              width={300}
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className={`text-2xl mb-2 text-center ${corinthia.className}`}>
              Cô Dâu
            </h3>
            <h3
              className={`text-5xl font-semibold mb-2 text-center ${corinthia.className}`}
            >
              Lê Ngọc Trân
            </h3>
            <p className={`italic text-justify ${merriweather.className}`}>
              “Cảm ơn anh
              <br />
              Cảm ơn anh vì đã rep story… đúng lúc.
              <br />
              Cảm ơn vì đã luôn là người kéo em ra khỏi deadline, khỏi những lần
              em tự hoang mang, và khỏi cả mấy lần em nổi giận vô lý.
              <br />
              Cảm ơn vì yêu em bằng sự kiên nhẫn (và cả kỹ năng debug mối quan
              hệ cực tốt).
              <br />
              Không phải lúc nào cũng hoàn hảo, nhưng nhờ có anh – mọi thứ đều
              trở nên đáng yêu hơn rất nhiều.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
