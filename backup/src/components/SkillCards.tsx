export default function SkillCards() {
  const cards = [
    {
      title: "Help with Garden Maintenance",
      location: "Brooklyn, NY",
      duration: "3 hours",
      description: "Need help with pruning trees and planting new flowers in my backyard garden."
    },
    {
      title: "Teach Basic Photography",
      location: "Online",
      duration: "2 hours",
      description: "Looking for someone to teach me the basics of DSLR photography and photo editing."
    },
    {
      title: "Cook Healthy Meals",
      location: "Manhattan, NY",
      duration: "4 hours",
      description: "Need assistance preparing a week's worth of healthy meal prep for my family."
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div key={card.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {card.location}
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {card.duration}
            </div>
          </div>
          <p className="text-gray-600 mb-4">{card.description}</p>
          <button className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            Learn More
          </button>
        </div>
      ))}
    </div>
  )
} 