export const ColumnHeader = ({ columnName, isWide }) => {
  const widthClass = isWide
    ? 'col-span-2 justify-start ml-4'
    : 'col-span-1 justify-center'
  return (
    <div
      className={`text-gray-100 text-sm flex font-bold items-center p-4 ${widthClass}`}
    >
      {columnName}
    </div>
  )
}
