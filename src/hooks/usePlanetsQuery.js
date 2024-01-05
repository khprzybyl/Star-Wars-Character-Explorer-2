import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const usePlanetsQuery = (planetUrls) => {
  return useQuery({
    queryKey: ['planets', ...planetUrls.sort()],
    queryFn: async () => {
      const fetchPlanet = async (url) => {
        const response = await axios.get(url)
        return response.data
      }

      const planetPromises = planetUrls.map((url) => fetchPlanet(url))
      const planets = await Promise.all(planetPromises)
      return planets.reduce((acc, planet) => {
        acc[planet.url] = planet // Map each planet's URL to its data
        return acc
      }, {})
    },
    enabled: planetUrls.length > 0,
    staleTime: Infinity,
    cacheTime: Infinity,
  })
}
