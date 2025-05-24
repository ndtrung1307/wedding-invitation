import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["vietnamese"],
  weight: "400",
});

export default function CoupleStory() {
  return (
    <section
      id="story"
      className={"py-16 bg-white" + " " + merriweather.className}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Tụi mình - Một hành trình
        </h2>
        <div className="max-w-3xl mx-auto text-justify">
          <p className="text-gray-700 mb-4">
            Tụi mình quen nhau vì nhà trai lỡ… rep story. Không ngờ từ một cái
            rep vu vơ mà nên chuyện thật. Sau đó, ảnh tỏ tình đúng 30 Tết – chắc
            chọn ngày cho dễ nhớ (hoặc để không bị từ chối?).
          </p>
          <p className="text-gray-700 mb-4">
            Từ đó tới giờ:{" "}
            <b>
              {(() => {
                const startDate = new Date(2021, 1, 12); // 08/06/2020
                const now = new Date();
                const diffTime = Math.abs(now.getTime() - startDate.getTime());
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                const years = Math.floor(diffDays / 365);
                const months = Math.floor((diffDays % 365) / 30);
                const days = diffDays % 30;
                return `${years} năm, ${months} tháng, ${days} ngày`;
              })()}{" "}
            </b>
            - Đủ lâu để cùng nhau qua bao nhiêu lần cãi nhau vì ăn gì, đi đâu,
            ai rửa chén. Nhưng cũng đủ để biết: tụi mình chịu được nhau, thương
            nhau, và muốn đi tiếp… dài dài.
          </p>
          <p className="text-gray-700 mb-4">
            Và giờ thì: <b>Tụi mình cưới!</b>
          </p>

          <p className="text-gray-700">
            Rất mong được ăn mừng cùng gia đình và những người tụi mình thương
            quý nhất!
          </p>
        </div>
      </div>
    </section>
  );
}
