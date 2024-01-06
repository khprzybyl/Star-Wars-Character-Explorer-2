import React, { useContext } from 'react'
import { ApplicationContext } from '../hooks/useAppContextUtils.js'

export const Search = () => {
  const { search, handleSearch } = useContext(ApplicationContext)

  const handleInputChange = (e) => {
    handleSearch(e.target.value)
  }

  return (
    <div>
      <input
        type="search"
        value={search}
        onChange={handleInputChange}
        aria-label="Search character by name"
        placeholder="Search by name"
        className="p-3 rounded-lg pl-4 text-sm dark:bg-slate-200"
      />
    </div>
  )
}
