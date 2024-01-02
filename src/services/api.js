import axios from 'axios'

export const fetchPeople = async () => {
  try {
    const response = await axios.get(`https://swapi.dev/api/people`)
    return response.data
  } catch (error) {
    console.error('Error fetching data: ', error)
    throw error
  }
}
