import { usePeopleQuery } from '../hooks/usePeopleQuery'
import { User } from './User'

export const UserList = () => {
  const { isPending, error, data } = usePeopleQuery()

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log('data:', data)
  return (
    <div>
      {data?.results.map((user) => {
        return <User key={user.name} user={user} />
      })}
    </div>
  )
}
