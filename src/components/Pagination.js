import { ApplicationContext } from '../App.js'
import { useContext } from 'react'
import { usePeopleQuery } from '../hooks/usePeopleQuery.js'
import { nextPage, prevPage } from '../utils/pagination'

export const Pagination = () => {
  let { queryParams, handlePageChange } = useContext(ApplicationContext)
  let { page } = queryParams

  const { data } = usePeopleQuery()

  const totalPageCount = data?.count ? Math.ceil(data?.count / 10) : 0

  const handlePageChangeNext = () => {
    handlePageChange(page + 1)
  }
  const handlePageChangePrevious = () => {
    handlePageChange(page - 1)
  }

  return (
    <div className="flex gap-5  items-center">
      <button
        className="bg-white px-6 py-2 rounded-xl"
        onClick={handlePageChangePrevious}
        disabled={page === 1}
      >
        Previous
      </button>
      <ul className="flex gap-5 items-center">
        <li>{prevPage(page)}</li>
        <li className="font-extrabold text-xl">{page}</li>
        <li>{nextPage(page, totalPageCount)}</li>
      </ul>
      <button
        className="bg-white px-6 py-2 rounded-xl"
        onClick={handlePageChangeNext}
        disabled={!totalPageCount || page === totalPageCount}
      >
        Next
      </button>
    </div>
  )
}
