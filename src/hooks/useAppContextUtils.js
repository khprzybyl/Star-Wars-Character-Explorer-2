import { createContext, useState } from 'react'

const initialState = {
  page: 1,
  search: '',
}

export const ApplicationContext = createContext(initialState)

export const useAppContextUtils = () => {
  const [queryParams, setQueryParams] = useState({
    page: initialState.page,
    search: initialState.search,
  })

  const handleSearch = (newSearch) => {
    setQueryParams({
      ...queryParams,
      search: newSearch,
      page: 1,
    })
  }

  const handlePageChange = (page) => {
    setQueryParams({
      ...queryParams,
      page,
    })
  }

  const handlePageCountSet = (pageCount) => {
    setQueryParams({
      ...queryParams,
      pageCount,
    })
  }

  return {
    queryParams,
    handleSearch,
    handlePageChange,
    handlePageCountSet,
  }
}
