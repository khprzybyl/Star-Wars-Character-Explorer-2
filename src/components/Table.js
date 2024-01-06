import { ColumnHeader } from './ColumnHeader'

const COLUMN_NAMES = [
  'Name',
  'Height',
  'Mass',
  'Created',
  'Edited',
  'Planet Name',
]

export const Table = ({ children }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-7 gap-6 bg-gray-900 rounded-xl">
        {COLUMN_NAMES.map((columnName, index) => (
          <ColumnHeader
            key={columnName}
            columnName={columnName}
            children={children}
            isWide={index === 0}
          />
        ))}
      </div>
      {children}
    </div>
  )
}
