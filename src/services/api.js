import qs from 'qs'
import axios from 'axios'

export const fetchPeople = async (queryParams) => {
  const queryString = qs.stringify(queryParams, { skipNulls: true })
  console.log('queryString', queryString)
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/people?${queryString}`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching data: ', error)
    throw error
  }
}
