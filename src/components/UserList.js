import { usePeopleQuery } from '../hooks/usePeopleQuery'
import { User } from './User'
import { UserSkeletonLoader } from './UserSkeletonLoader.js'

export const UserList = () => {
  const { isPending, error, data: peopleData } = usePeopleQuery()

  const homeworldUrls = [
    ...new Set(peopleData?.people.map((user) => user.homeworld)),
  ]

  if (isPending) return <UserSkeletonLoader />

  if (error) return 'An error has occurred: ' + error.message
  return (
    <div className="rounded-b-2xl flex flex-col gap-1 ">
      {peopleData?.people.map((user) => {
        return (
          <div
            key={user.name}
            className=" bg-slate-200 rounded-lg dark:bg-gray-800 dark:text-slate-200 text-sm"
          >
            <User user={user} homeworldUrls={homeworldUrls} />
          </div>
        )
      })}
    </div>
  )
}
