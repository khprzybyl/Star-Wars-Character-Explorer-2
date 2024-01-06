import React from 'react'
import { formatDate } from '../utils/formatDate.js'
import { usePlanetsQuery } from '../hooks/usePlanetsQuery.js'
import { Button } from './Button.js'

export const User = ({ user, homeworldUrls }) => {
  const { data: planetsData, isPending } = usePlanetsQuery(homeworldUrls)

  const userHomeworld = isPending
    ? 'Loading...'
    : planetsData[user.homeworld]?.name || 'Unknown'

  const formattedCreatedDate = formatDate(user.created)
  const formattedEditedDate = formatDate(user.edited)

  return (
    <ul className="grid grid-cols-7 gap-6">
      <li className="col-span-2 p-4 font-bold ml-4">{user?.name}</li>
      <li className="flex justify-center items-center p-4">{user?.height}</li>
      <li className="flex justify-center items-center p-4">{user?.mass}</li>
      <li className="flex justify-center items-center p-4">
        {formattedCreatedDate}
      </li>
      <li className="flex justify-center items-center p-4">
        {formattedEditedDate}
      </li>
      <li className="flex justify-center items-center p-4">
        <Button buttonText={userHomeworld} />
      </li>
    </ul>
  )
}
