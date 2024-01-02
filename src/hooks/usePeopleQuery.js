import { useQuery } from '@tanstack/react-query'
import { fetchPeople } from '../services/api.js'

export const usePeopleQuery = () => {
  return useQuery({
    queryKey: ['people'],
    queryFn: () => fetchPeople(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    keepPreviousData: true,
  })
}
