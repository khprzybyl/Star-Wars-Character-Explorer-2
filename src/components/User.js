import React from 'react'

export const User = ({ user }) => {
  return (
    <ul className="flex justify-between gap-10 px-6 py-2">
      <li className="name">{user?.name}</li>
      <li>{user?.height}</li>
      <li>{user?.mass}</li>
      <li>{user?.created}</li>
      <li>{user?.edited}</li>
    </ul>
  )
}
