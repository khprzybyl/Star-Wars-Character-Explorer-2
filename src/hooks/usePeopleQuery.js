import { useQuery } from '@tanstack/react-query'
import { fetchPeople } from '../services/api.js'
import { ApplicationContext } from '../App.js'
import { useContext } from 'react'

export const usePeopleQuery = () => {
  let { queryParams } = useContext(ApplicationContext)
  let { page } = queryParams

  return useQuery({
    queryKey: ['people', page],
    queryFn: () => fetchPeople(page),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    keepPreviousData: true,
  })
}
