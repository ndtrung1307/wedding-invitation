import Image from "next/image"

const timelineEvents = [
  {
    date: "September 2018",
    title: "First Meeting",
    description: "We met during a computer science study group at university.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    date: "May 2019",
    title: "First Date",
    description: "Our first official date at a local coffee shop.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    date: "December 2020",
    title: "Graduation",
    description: "We graduated together and decided to move to the same city.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    date: "July 2022",
    title: "Moving In",
    description: "We took the next step and moved in together.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    date: "February 2024",
    title: "Engagement",
    description: "John proposed during a romantic hike at sunset.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function LoveStory() {
  return (
    <section id="timeline" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Love Story</h2>
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center mb-8`}
            >
              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <div className={`bg-gray-100 rounded-lg p-4 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <p>{event.description}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          ))}
          <div className="absolute h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 top-0 hidden md:block"></div>
        </div>
      </div>
    </section>
  )
}

