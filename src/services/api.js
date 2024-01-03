import axios from 'axios'

export const fetchPeople = async (page) => {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching data: ', error)
    throw error
  }
}
