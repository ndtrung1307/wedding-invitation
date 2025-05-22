import Image from "next/image"

export default function Venues() {
  return (
    <section id="venues" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Wedding Venues</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Ceremony Venue"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Ceremony</h3>
            <p className="text-gray-700 mb-2">St. Mary's Church</p>
            <p className="text-gray-700 mb-2">123 Main St, Anytown, USA</p>
            <p className="text-gray-700">August 15, 2025 at 2:00 PM</p>
          </div>
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Reception Venue"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Reception</h3>
            <p className="text-gray-700 mb-2">Grand Ballroom, Luxury Hotel</p>
            <p className="text-gray-700 mb-2">456 Park Ave, Anytown, USA</p>
            <p className="text-gray-700">August 15, 2025 at 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}

