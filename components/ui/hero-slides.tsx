"use client"

interface WebsiteCard {
  id: number
  title: string
  color: string
  image?: string
}

const websiteCards: WebsiteCard[] = [
  { id: 1, title: "E-commerce Store", color: "bg-blue-500" },
  { id: 2, title: "Portfolio Site", color: "bg-purple-500" },
  { id: 3, title: "Corporate Website", color: "bg-green-500" },
  { id: 4, title: "Restaurant Menu", color: "bg-orange-500" },
  { id: 5, title: "Fashion Brand", color: "bg-pink-500" },
  { id: 6, title: "Tech Startup", color: "bg-cyan-500" },
  { id: 7, title: "Real Estate", color: "bg-indigo-500" },
  { id: 8, title: "Healthcare", color: "bg-teal-500" },
  { id: 9, title: "Education", color: "bg-yellow-500" },
  { id: 10, title: "Finance", color: "bg-red-500" },
  { id: 11, title: "Travel Agency", color: "bg-emerald-500" },
  { id: 12, title: "Sports Club", color: "bg-violet-500" },
]

function WebsiteCard({ card }: { card: WebsiteCard }) {
  return (
    <div className="mb-6">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-48 h-36 lg:w-72 lg:h-52 border border-gray-200">
        {/* Browser bar */}
        <div className="bg-gray-100 px-3 py-1.5 flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
          </div>
          <div className="bg-white rounded px-2 py-0.5 text-xs text-gray-600 flex-1 truncate">
            {card.title.toLowerCase().replace(/\s+/g, "")}.com
          </div>
        </div>

        {/* Website content */}
        <div className={`${card.color} h-full relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>

          {/* Header */}
          <div className="bg-white/90 mx-2 mt-1.5 rounded px-2 py-1">
            <div className="h-1.5 bg-gray-300 rounded mb-1"></div>
            <div className="h-1 bg-gray-200 rounded w-3/4"></div>
          </div>

          {/* Content blocks */}
          <div className="mx-2 mt-1.5 space-y-1">
            <div className="bg-white/70 rounded px-2 py-0.5">
              <div className="h-1 bg-gray-400 rounded mb-0.5"></div>
              <div className="h-0.5 bg-gray-300 rounded w-2/3"></div>
            </div>
            <div className="bg-white/70 rounded px-2 py-0.5">
              <div className="h-1 bg-gray-400 rounded mb-0.5"></div>
              <div className="h-0.5 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>

          {/* Button */}
          <div className="absolute bottom-1.5 left-2">
            <div className="bg-white/90 rounded px-2 py-0.5 text-xs font-medium">{card.title}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Column({ cards, direction, delay }: { cards: WebsiteCard[]; direction: "up" | "down"; delay: number }) {
  // Duplicate cards for seamless loop
  const duplicatedCards = [...cards, ...cards]

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={`flex flex-col ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}
        style={{
          animationDelay: `${delay}s`,
          animationDuration: "20s",
        }}
      >
        {duplicatedCards.map((card, index) => (
          <WebsiteCard key={`${card.id}-${index}`} card={card} />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const column1Cards = websiteCards.slice(0, 4)
  const column2Cards = websiteCards.slice(4, 8)
  const column3Cards = websiteCards.slice(8, 12)

  return (
    <div className="absolute right-0 w-full lg:w-4/5 h-full min-h-screen overflow-hidden">
      <div className="flex justify-end items-start h-full pt-10 pr-4 lg:pr-10 gap-2 lg:gap-8">
        {/* Column 1 - Moving Up */}
        <div className="flex-shrink-0 w-56 sm:w-72 transform rotate-12">
          <Column cards={column1Cards} direction="up" delay={0} />
        </div>

        {/* Column 2 - Moving Down */}
        <div className="flex-shrink-0 w-56 sm:w-72 transform rotate-12">
          <Column cards={column2Cards} direction="down" delay={1} />
        </div>

        {/* Column 3 - Moving Up */}
        <div className="flex-shrink-0 w-56 sm:w-72 transform rotate-12">
          <Column cards={column3Cards} direction="up" delay={0} />
        </div>
      </div>

      
    </div>
  )
}
