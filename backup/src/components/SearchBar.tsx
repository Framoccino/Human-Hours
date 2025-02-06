export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="What do you want to do today?"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  )
} 