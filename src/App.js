import React, { useState, useEffect } from 'react'
import { Table } from './components/Table'
import { UserList } from './components/UserList'
import { Pagination } from './components/Pagination.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const defaultValue = {
  page: 1,
}

const queryClient = new QueryClient()

export const ApplicationContext = React.createContext(defaultValue)

export const App = () => {
  const [theme, setTheme] = useState(null)
  const [queryParams, setQueryParams] = useState({
    page: defaultValue.page,
  })

  useEffect(() => {
    window.location.hash = `page-${queryParams.page}`
  }, [queryParams.page])

  const handleHashChange = () => {
    const page = window.location.hash.replace('#page-', '')
    if (!isNaN(page)) {
      setQueryParams({ ...queryParams, page: Number(page) })
    }
  }

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange, false)

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false)
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handlePageChange = (newPage) => {
    setQueryParams({
      ...queryParams,
      page: newPage,
    })
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationContext.Provider value={{ queryParams, handlePageChange }}>
        <div className=" h-auto flex bg-slate-300 justify-center items-center flex-col gap-6 dark:bg-black py-20">
          <h1 className="text-3xl dark:text-yellow-300 font-bold">
            Starwars Characters Explorer
          </h1>
          <button
            className="bg-green-500 p-4 rounded-3xl"
            onClick={handleToggleTheme}
          >
            {' '}
            Dark Mode
          </button>
          <Table>
            <UserList />
          </Table>
          <Pagination />
        </div>
        <ReactQueryDevtools initialIsOpen />
      </ApplicationContext.Provider>
    </QueryClientProvider>
  )
}
