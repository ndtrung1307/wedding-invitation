export default function Story() {
  return (
    <section id="story" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Chuyện tình yêu của chúng mình
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 mb-4">
            Chúng mình lần đầu gặp nhau vào ngày <b>12/03/2020</b>, một cuộc gặp
            gỡ tình cờ nhưng đầy duyên số. Sau nhiều lần trò chuyện, những buổi
            cà phê, những tin nhắn mỗi đêm, chúng mình chính thức trở thành một
            đôi vào ngày <b>12/02/2021</b>.
          </p>
          <p className="text-gray-700 mb-4">
            Từ đó đến nay đã trôi qua:{" "}
            <b>
              {(() => {
                const startDate = new Date(2020, 5, 8); // 08/06/2020
                const now = new Date();
                const diffTime = Math.abs(now.getTime() - startDate.getTime());
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                const years = Math.floor(diffDays / 365);
                const months = Math.floor((diffDays % 365) / 30);
                const days = diffDays % 30;
                return `${years} năm, ${months} tháng, ${days} ngày`;
              })()}{" "}
            </b>
            - đầy ắp kỷ niệm, tiếng cười, đôi khi là những tranh luận nhỏ nhưng
            luôn kết thúc bằng sự thấu hiểu và yêu thương.
          </p>
          <p className="text-gray-700">
            Giờ đây, chúng mình quyết định cùng nhau bước sang một chương mới -.
            Trở thành vợ chồng. Chúng mình rất mong được chia sẻ niềm vui này
            cùng gia đình và bạn bè thân yêu!
          </p>
        </div>
      </div>
    </section>
  );
}
