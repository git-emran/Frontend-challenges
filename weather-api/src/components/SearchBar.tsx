import { useRef, useState } from "react"
import { FaSearch } from "react-icons/fa"

interface searchCityProps {
  onSearch: (city: string) => void
}

const SearchBar = ({ onSearch }: searchCityProps) => {
  const [search, setSearch] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (search.trim()) {
      onSearch(search)
      setSearch("")
    }

  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-row px-2 py-4 max-w-[300px] rounded-md gap-6 items-center justify-center">

      <input value={search} onChange={(e) => setSearch(e.target.value)} className="bg-slate-300/70 rounded-full px-3 py-3" type="text" placeholder="Search for a city" />
      <button type="submit" className="bg-slate-300/70 cursor-pointer hover:bg-amber-400 rounded-full p-4">
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchBar
