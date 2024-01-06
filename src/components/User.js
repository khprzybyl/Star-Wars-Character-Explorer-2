import React, { useState, useEffect } from 'react'
import { formatDate } from '../utils/formatDate.js'
import { usePlanetsQuery } from '../hooks/usePlanetsQuery.js'
import { Button } from './Button.js'
import { Popup } from './Popup.js'

export const User = ({ user, homeworldUrls }) => {
  const [openPopup, setOpenPopup] = useState(false)
  const { data: planetsData, isPending } = usePlanetsQuery(homeworldUrls)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popupElement = document.getElementById('popup-element')

      if (openPopup && popupElement && !popupElement.contains(event.target)) {
        setOpenPopup(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openPopup])

  const userHomeworld = isPending
    ? 'Loading...'
    : planetsData[user.homeworld]?.name || 'Unknown'

  const formattedCreatedDate = formatDate(user.created)
  const formattedEditedDate = formatDate(user.edited)

  const handlePlanetClick = () => setOpenPopup(true)

  return (
    <div>
      <ul className="grid grid-cols-7 gap-6 items-center">
        <li className="col-span-2 p-4 font-bold ml-4">{user?.name}</li>
        <li className="flex justify-center p-4">{user?.height}</li>
        <li className="flex justify-center p-4">{user?.mass}</li>
        <li className="flex justify-center p-4">{formattedCreatedDate}</li>
        <li className="flex justify-center p-4">{formattedEditedDate}</li>
        <li className="flex justify-center p-4">
          <Button buttonText={userHomeworld} onClick={handlePlanetClick} />
        </li>
      </ul>

      {openPopup && (
        <Popup
          planet={planetsData[user.homeworld]}
          togglePopup={() => setOpenPopup(false)}
        />
      )}
    </div>
  )
}
