import React from 'react'
import { formatDate } from '../utils/formatDate.js'

export const User = ({ user }) => {
  const formattedCreatedDate = formatDate(user.created)
  const formattedEditedDate = formatDate(user.edited)

  return (
    <ul className="flex justify-between gap-10 px-6 py-2">
      <li className="name">{user?.name}</li>
      <li>{user?.height}</li>
      <li>{user?.mass}</li>
      <li>{formattedCreatedDate}</li>
      <li>{formattedEditedDate}</li>
    </ul>
  )
}
