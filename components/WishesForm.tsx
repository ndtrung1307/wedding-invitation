"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function WishesForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    alert("Thank you for your wishes!");
  };

  return (
    <section id="wishes" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Send Your Wishes
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Your Wishes
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Wishes
          </Button>
        </form>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Sổ Lưu Bút
          </h3>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <strong>John Doe:</strong> Congratulations! Wishing you both a
              lifetime of love and happiness.
            </li>
            <li className="mb-2">
              <strong>Jane Smith:</strong> So happy for you two! Can't wait to
              celebrate together.
            </li>
            <li className="mb-2">
              <strong>Emily Johnson:</strong> Your love story is beautiful.
              Wishing you all the best on your special day!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
