import { usePeopleQuery } from '../hooks/usePeopleQuery'
import { User } from './User'
// import { useQuery } from '@tanstack/react-query'
// import axios from 'axios'

export const UserList = () => {
  const { isPending, error, data } = usePeopleQuery()
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['people'],
  //   queryFn: () =>
  //     axios.get('https://swapi.dev/api/people/').then((res) => res.data),
  // })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log('data:', data)
  return (
    <div>
      {data?.results.map((user, index) => {
        console.log('user', user)
        console.log('index', index)
        return <User key={index} user={user} />
      })}
    </div>
  )
}
