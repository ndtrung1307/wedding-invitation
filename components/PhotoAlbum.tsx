"use client";

import LightGallery from "lightgallery/react";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Styles (rất quan trọng)
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import { Merriweather } from "next/font/google";
import Image from "next/image";

const merriweather = Merriweather({
  subsets: ["vietnamese"],
  weight: "400",
});

const photos = [
  // "/TINK2077.jpg?height=600&width=800",
  // "/TINK2005.jpg?height=600&width=800",
  "/TINK2070.jpg?height=600&width=800",
  "/TINK2091.jpg?height=600&width=800",
  // "/TINK2121.jpg?height=600&width=800",
  // "/TINK2139.jpg?height=600&width=800",
  "/TINK2167.jpg?height=600&width=800",
  // "/TINK2179.jpg?height=600&width=800",
  // "/TINK2190.jpg?height=600&width=800",
  "/TINK2251.jpg?height=600&width=800",
  "/TINK2291.jpg?height=600&width=800",
  "/TINK2329.jpg?height=600&width=800",
];

export default function PhotoAlbum() {
  return (
    <section id="photos" className={"py-16 bg-white " + merriweather.className}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Album sống ảo chính thức
        </h2>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {photos.map((photo, index) => (
            <a
              key={index}
              href={photo}
              className="group relative block overflow-hidden rounded shadow"
            >
              <Image
                src={photo}
                alt={photo}
                width={300}
                height={200}
                className="transform hover:scale-105 transition duration-300 items-center justify-center mx-auto"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  );
}
