"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Merriweather } from "next/font/google";
import { useEffect, useState } from "react";

type Wish = {
  senderName: string;
  relationship: string;
  message: string;
};

const merriweather = Merriweather({
  subsets: ["vietnamese"],
  weight: "400",
});

export default function WishesList() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [loading, setLoading] = useState(true);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    // Thay URL bằng API thực tế của bạn
    fetch("https://wedding-server-6sge.onrender.com/wishes")
      .then((res) => res.json())
      .then((data) => {
        setWishes(data);
        setLoading(false);
      })
      .catch(() => {
        setWishes([]);
        setLoading(false);
      });
  }, [reload]);

  const triggerReload = () => {
    setLoading(true);
    setReload((prev) => !prev);
  };

  if (loading) {
    return <p className="p-4 text-gray-500">Đang tải lời chúc...</p>;
  }

  const next = () => setCurrentIndex((i) => (i + 1) % wishes.length);
  const prev = () =>
    setCurrentIndex((i) => (i - 1 + wishes.length) % wishes.length);

  return (
    <div className={"p-4" + " " + merriweather.className}>
      {/* Hiển thị trên điện thoại */}
      <div className="block md:hidden">
        {wishes.length > 0 ? (
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <p className="text-xl font-semibold text-blue-700">
              {wishes[currentIndex].senderName}
            </p>
            <p className="italic text-sm text-gray-500">
              ({wishes[currentIndex].relationship})
            </p>
            <p className="text-gray-800 mt-2 leading-relaxed break-words overflow-hidden text-ellipsis">
              “{wishes[currentIndex].message}”
            </p>

            <div className="flex justify-between mt-6">
              <button
                onClick={prev}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                <ArrowLeft className="w-4 h-4 inline-block" />
              </button>
              <button
                onClick={next}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                <ArrowRight className="w-4 h-4 inline-block" />
              </button>
            </div>
          </div>
        ) : (
          <h2 className="text-center text-gray-500 mt-4">
            Chưa có lời chúc nào được gửi đến chúng mình.
          </h2>
        )}
      </div>

      {/* Hiển thị trên desktop */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {wishes.map((wish, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-100"
          >
            <div className="text-xl font-semibold text-blue-700">
              {wish.senderName}
            </div>
            <div className="text-sm text-gray-500 mb-2 italic">
              ({wish.relationship})
            </div>
            <div className="text-gray-800 mt-2 leading-relaxed break-words overflow-hidden text-ellipsis">
              “{wish.message}”
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
