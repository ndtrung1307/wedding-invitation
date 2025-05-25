import Couple from "@/components/Couple";
import CoupleStory from "@/components/CoupleStory";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PhotoAlbum from "@/components/PhotoAlbum";
import RSVPButton from "@/components/RSVPButton";
import Schedule from "@/components/Schedule";
import SupportSection from "@/components/SupportSection";
import WishesForm from "@/components/WishesForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <CoupleStory />
      <Couple />
      <PhotoAlbum />
      <Schedule />
      <RSVPButton />
      <WishesForm />
      <SupportSection />
      <Footer />
    </main>
  );
}
