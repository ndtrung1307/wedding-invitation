"use client";

import { Merriweather } from "next/font/google";
import { useState } from "react";
import toast from "react-hot-toast";

const merriweather = Merriweather({
  subsets: ["vietnamese"],
  weight: "400",
});

interface IAttendee {
  name: string;
  willAttend: boolean;
  relationship: string;
  numberOfPeople?: number;
  location?: string;
}

export default function RSVPButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [willAttend, setWillAttend] = useState(false);
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [guests, setGuests] = useState(1);
  const [selectedParty, setSelectedParty] = useState("");

  const handleSubmit = async () => {
    if (!name || !relationship) {
      toast.error("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    console.log({ name, relationship, guests, selectedParty });

    try {
      let payload: IAttendee = {
        name,
        relationship,
        willAttend,
      };

      if (willAttend) {
        if (!guests) {
          toast.error("Vui lòng nhập số người sẽ đi cùng.");
          return;
        }
        if (!selectedParty) {
          toast.error("Vui lòng chọn buổi tiệc bạn sẽ tham dự.");
          return;
        }
        payload = {
          ...payload,
          numberOfPeople: guests,
          location: selectedParty,
        };
      }

      const res = await fetch(
        "https://wedding-server-6sge.onrender.com/guest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      console.log("confirmed: ", data);
      toast.success("Tụi mình nhận được rồi nha! 🥰");
    } catch (error) {
      console.error("Error submitting the wish:", error);
      toast.error("Có lỗi xảy ra khi gởi lời chúc. Vui lòng thử lại!");
    }

    setIsOpen(false);
    setWillAttend(false);
    setName("");
    setRelationship("");
    setGuests(1);
    setSelectedParty("");
  };

  return (
    <div style={{ backgroundColor: "#FAEEEE", color: "#45384B" }}>
      <button
        onClick={() => setIsOpen(true)}
        className={
          "px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition justify-center items-center flex mx-auto " +
          merriweather.className
        }
      >
        Xác nhận tham dự 💌
      </button>

      {isOpen && (
        <div
          className={
            "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 " +
            merriweather.className
          }
        >
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-black text-xl"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center">
              Xác nhận tham dự
            </h2>

            <label className="block mb-2 text-sm">Bạn tên là</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 mb-4 border rounded-md"
              placeholder="Nhập tên bạn"
            />
            <label className="block mb-2 text-sm">Bạn là</label>
            <input
              type="text"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              className="w-full px-3 py-2 mb-4 border rounded-md"
              placeholder="Bạn cấp 3, bạn đại học, đồng nghiệp, người thân..."
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="willAttend"
                checked={willAttend}
                onChange={(e) => setWillAttend(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="willAttend" className="text-sm">
                Tôi sẽ tham dự
              </label>
            </div>

            {willAttend && (
              <>
                <label className="block mb-2 text-sm">
                  Số người sẽ tham dự
                </label>
                <input
                  type="number"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  min={1}
                  className="w-full px-3 py-2 mb-4 border rounded-md"
                />

                <label className="block mb-2 text-sm">
                  Chọn buổi tiệc bạn sẽ tham dự
                </label>
                <select
                  value={selectedParty}
                  onChange={(e) => setSelectedParty(e.target.value)}
                  className="w-full px-3 py-2 mb-4 border rounded-md"
                >
                  <option value="">-- Chọn 1 --</option>
                  <option
                    className="text-lg"
                    value="Tiệc nhà gái - 28,29/06 tại Vĩnh Long"
                  >
                    Tiệc nhà gái - 28,29/06 tại Vĩnh Long
                  </option>
                  <option
                    className="text-lg"
                    value="Tiệc nhà trai - 06/07 tại Quảng Nam"
                  >
                    Tiệc nhà trai - 06/07 tại Quảng Nam
                  </option>
                  <option
                    className="text-lg"
                    value="Tiệc Báo Hỷ - 12/07 tại TP.HCM"
                  >
                    Tiệc Báo Hỷ - 12/07 tại TP.HCM
                  </option>
                </select>
              </>
            )}

            <button
              onClick={handleSubmit}
              className="w-full py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
            >
              Gửi xác nhận 🎉
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
