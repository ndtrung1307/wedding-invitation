import Couple from "@/components/Couple";
import CoupleStory from "@/components/CoupleStory";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LifeAlbum from "@/components/LoveStory";
import PhotoAlbum from "@/components/PhotoAlbum";
import Schedule from "@/components/Schedule";
import WishesForm from "@/components/WishesForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <CoupleStory />
      <Couple />
      <PhotoAlbum />
      <Schedule />
      <LifeAlbum />
      <WishesForm />
      <Footer />
    </main>
  );
}
