import React from 'react'
import { Button } from './Button.js'

export const Popup = ({ planet, togglePopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center bg-slate-800/30 dark:bg-slate-500/30 items-center color-white backdrop-blur">
      <div
        className="rounded-lg flex flex-col shadow-xl bg-slate-200 dark:bg-slate-800 p-8 w-3/12"
        id="popup-element"
      >
        <section className="flex justify-between items-center border-b-2 border-slate-500 border-solid text-sm">
          <h2>{planet?.name || 'Planet Details'}</h2>
        </section>

        <section className="text-xs leading-5 my-4">
          <div className="flex gap-2">
            <p>Diameter:</p> <p>{planet?.diameter}</p>
          </div>
          <div className="flex gap-2">
            <p>Climate:</p> <p>{planet?.climate}</p>
          </div>
          <div className="flex gap-2">
            <p>Population:</p> <p>{planet.population}</p>
          </div>
        </section>
        <Button
          ariaLabel="Go back button"
          onClick={togglePopup}
          buttonText="Go back"
        ></Button>
      </div>
    </div>
  )
}
