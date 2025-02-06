export default function ValidatedSkills() {
  const skills = [
    { name: 'Gardening', count: 12 },
    { name: 'Photography', count: 8 },
    { name: 'Cooking', count: 15 },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Validated Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200"
          >
            <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{skill.name}</span>
            <span className="text-gray-500">({skill.count})</span>
          </div>
        ))}
      </div>
    </div>
  )
} 