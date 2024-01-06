export const Button = ({ buttonText, onClick, disabled, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      // disabled={disabled}
      aria-label={ariaLabel}
      className="bg-slate-500 hover:bg-yellow-400 text-white hover:text-black font-bold py-2 px-4 w-full rounded-lg text-xs"
    >
      {buttonText}
    </button>
  )
}
