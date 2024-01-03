import { ColumnHeader } from './ColumnHeader'

export const Table = ({ children }) => {
  return (
    <div className="bg-blue-300 rounded-3xl">
      <ColumnHeader />
      {children}
    </div>
  )
}
