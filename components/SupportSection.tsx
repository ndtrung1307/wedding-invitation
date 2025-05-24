"use client";

import { useState } from "react";

export default function SupportSection() {
  const [showQR, setShowQR] = useState(false);

  return (
    <section className="mt-10 text-center text-sm text-gray-600">
      <p className="mb-4">Cảm ơn bạn đã đến chung vui cùng tụi mình 💖</p>

      <button
        onClick={() => setShowQR(!showQR)}
        className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200 transition"
      >
        {showQR
          ? "Ẩn thông tin chuyển khoản"
          : "Hộp tiền mừng cưới của tụi mình 💌"}
      </button>

      {showQR && (
        <div className="mt-6 grid md:grid-cols-2 md:flex-row justify-center items-center gap-8">
          <div>
            <img
              src="/qr-cd.png"
              alt="QR Cô dâu"
              className="w-32 h-40 rounded-md shadow-md"
            />
            <p className="mt-1 text-xs text-gray-500">Lê Ngọc Trân</p>
          </div>
          <div>
            <img
              src="/qr-cr.png"
              alt="QR Chú rể"
              className="w-32 h-40 rounded-md shadow-md"
            />
            <p className="mt-1 text-xs text-gray-500">Nguyễn Đình Trung</p>
          </div>
        </div>
      )}
    </section>
  );
}
