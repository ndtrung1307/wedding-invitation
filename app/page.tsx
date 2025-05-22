import Header from "@/components/Header"
import Hero from "@/components/Hero"
import CoupleStory from "@/components/CoupleStory"
import Couple from "@/components/Couple"
import PhotoAlbum from "@/components/PhotoAlbum"
import Schedule from "@/components/Schedule"
import LoveStory from "@/components/LoveStory"
import WishesForm from "@/components/WishesForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <CoupleStory />
      <Couple />
      <PhotoAlbum />
      <Schedule />
      <LoveStory />
      <WishesForm />
      <Footer />
    </main>
  )
}

