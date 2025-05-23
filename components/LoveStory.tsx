"use client";

import LightGallery from "lightgallery/react";
import Image from "next/image";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Styles (rất quan trọng)
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["vietnamese"],
  weight: "400",
});

type Photo = {
  src: string;
  alt: string;
  caption?: string;
  date: string;
};

const photos: Photo[] = [
  {
    src: "/anh1.jpeg",
    alt: "Ảnh 1",
    caption: "Buổi dã ngoại ở Đà Lạt",
    date: "2024-05-01",
  },
  {
    src: "/anh2.jpeg",
    alt: "Ảnh 2",
    caption: "Team building Vũng Tàu",
    date: "2024-05-15",
  },
  {
    src: "/anh3.jpeg",
    alt: "Ảnh 3",
    date: "2024-05-20",
  },
  {
    src: "/anh4.jpeg",
    alt: "Ảnh 3",
    date: "2024-05-20",
  },
  {
    src: "/anh5.jpeg",
    alt: "Ảnh 3",
    date: "2024-05-20",
  },
];

export default function LifeAlbum() {
  return (
    <div className={"p-4 " + merriweather.className}>
      <h2 className="text-3xl font-semibold text-center mb-8 my-3">
        Những Khoảnh Khắc Đã Qua
      </h2>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {photos.map((photo, index) => (
          <a
            key={index}
            href={photo.src}
            data-sub-html={`
              <h4>${photo.caption || "Không có chú thích"}</h4>
              <p>Ngày chụp: ${photo.date}</p>
            `}
            className="group relative block overflow-hidden rounded shadow"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={300}
              height={200}
              className="transform hover:scale-105 transition duration-300"
            />
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
                {photo.caption}
              </div>
            )}
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
