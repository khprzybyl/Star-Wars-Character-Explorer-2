import { ColumnHeader } from './ColumnHeader'
import { UserList } from './UserList.js'

export const Table = () => {
  // if (typeof module !== 'undefined' && module.type === 'module') {
  //   console.log('ES6 modules are supported natively')
  // } else {
  //   console.log('ES6 modules are not supported natively')
  // }
  return (
    <div>
      Table
      <ColumnHeader />
      <UserList />
    </div>
  )
}
