"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Merriweather } from "next/font/google";
import { useState } from "react";
import WishesList from "./WishesList";

const merriweather = Merriweather({
  subsets: ["vietnamese"],
  weight: "400",
});

export default function WishesForm() {
  const [senderName, setSenderName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", { senderName, relationship, message });
    try {
      const res = await fetch(
        "https://wedding-server-6sge.onrender.com/wishes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ senderName, relationship, message }),
        }
      );

      const data = await res.json();
      console.log("Wish submitted successfully:", data);
      alert("Lời chúc của bạn đã được gửi thành công!");
    } catch (error) {
      console.error("Error submitting the wish:", error);
      alert("Có lỗi xảy ra khi gởi lời chúc. Vui lòng thử lại!");
    }

    // Reset form fields
    setSenderName("");
    setRelationship("");
    setMessage("");
    alert("Chúng mình cảm ơn lời chúc phúc của bạn!");
  };

  return (
    <section
      id="wishes"
      className={"py-16 " + merriweather.className}
      style={{ backgroundColor: "#FAEEEE", color: "#45384B" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Gởi lời chúc đến tụi mình!
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Bạn tên là:
            </label>
            <Input
              type="text"
              id="name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <div>
              <label htmlFor="role" className="block text-gray-700 mb-2">
                Bạn là:
              </label>
              <Input
                type="role"
                id="role"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                placeholder="Người thân, bạn bè, đồng nghiệp của cô dâu/ chú rể..."
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Lời chúc của bạn:
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => {
                if (e.target.value.length <= 300) {
                  setMessage(e.target.value);
                }
              }}
              required
              placeholder="Chúc tụi mình hạnh phúc, vui vẻ, sức khỏe, thành công..."
            />
            <p className="text-sm mt-1">{message.length}/300 ký tự</p>
          </div>
          <Button
            type="submit"
            className="w-full"
            style={{ backgroundColor: "#FFAAAA", color: "#45384B" }}
          >
            Gởi
          </Button>
        </form>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Sổ Lưu Bút
          </h3>
          <WishesList />
        </div>
      </div>
    </section>
  );
}
