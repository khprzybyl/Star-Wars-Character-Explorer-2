import { ApplicationContext } from '../hooks/useAppContextUtils.js'
import { useContext } from 'react'
import { usePeopleQuery } from '../hooks/usePeopleQuery.js'
import { nextPage, prevPage } from '../utils/pagination'
import { Button } from './Button.js'

export const Pagination = () => {
  let { page, handlePageChange } = useContext(ApplicationContext)

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
      <Button
        onClick={handlePageChangePrevious}
        disabled={page === 1}
        buttonText="Previous"
        ariaLabel="Move to previous page"
      ></Button>
      <ul className="flex gap-5 items-center dark:text-slate-100">
        <li>{prevPage(page)}</li>
        <li className="font-extrabold text-xl">{page}</li>
        <li>{nextPage(page, totalPageCount)}</li>
      </ul>
      <Button
        onClick={handlePageChangeNext}
        disabled={!totalPageCount || page === totalPageCount}
        buttonText="Next"
        ariaLabel="Move to next page"
      >
        Next
      </Button>
    </div>
  )
}
