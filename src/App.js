import React, { useState, useEffect } from 'react'
import { Table } from './components/Table'
import { Search } from './components/Search.js'
import { Button } from './components/Button.js'
import { UserList } from './components/UserList'
import { Pagination } from './components/Pagination.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  useAppContextUtils,
  ApplicationContext,
} from './hooks/useAppContextUtils.js'

const queryClient = new QueryClient()

export const App = () => {
  const { queryParams, ...methods } = useAppContextUtils()
  const [theme, setTheme] = useState(null)

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

  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationContext.Provider value={{ ...queryParams, ...methods }}>
        <div className=" h-auto flex bg-slate-300 justify-center items-center flex-col gap-6 dark:bg-black py-20">
          <h1 className="text-3xl dark:text-yellow-300 font-bold">
            Starwars Characters Explorer
          </h1>
          <Search />
          <Button onClick={handleToggleTheme} buttonText="Dark Mode" />
          <Table>
            <UserList />
          </Table>
          <Pagination />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </ApplicationContext.Provider>
    </QueryClientProvider>
  )
}
