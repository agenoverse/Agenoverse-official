type EventType = 'all' | 'nearest' | 'latest'

const FilterButtons = ({
  selected,
  onChange,
}: {
  selected: EventType
  onChange: (type: EventType) => void
}) => {
  const filters = [
    { label: 'All Events', value: 'all' },
    { label: 'Nearest Events', value: 'nearest' },
    { label: 'Lastest Event', value: 'latest' },
  ]

  return (
    <div className="flex gap-3 justify-center mb-8">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value as EventType)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
            selected === filter.value
              ? 'bg-black text-white border-black'
              : 'bg-white text-black border-black hover:bg-gray-100'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
export default FilterButtons