import { usePeopleQuery } from '../hooks/usePeopleQuery'
import { User } from './User'

export const UserList = () => {
  const { isPending, error, data: peopleData } = usePeopleQuery()

  const homeworldUrls = [
    ...new Set(peopleData?.results.map((user) => user.homeworld)),
  ]

  if (isPending) return 'Loading... LOLOLO'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      {peopleData?.results.map((user) => {
        return (
          <User key={user.name} user={user} homeworldUrls={homeworldUrls} />
        )
      })}
    </div>
  )
}
