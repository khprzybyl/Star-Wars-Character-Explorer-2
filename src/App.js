import { useState, useEffect } from 'react'
import { Table } from './components/Table'
import { UserList } from './components/UserList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// const ApplicationContext = createContext()

const queryClient = new QueryClient()

export const App = () => {
  const [theme, setTheme] = useState(null)

  // useEffect(() => {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // }, []);

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
      <div className=" h-screen bg-blue-200 flex justify-center items-center flex-col gap-6 dark:bg-black">
        <h1 className="text-3xl font-bold underline">
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
      </div>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}
