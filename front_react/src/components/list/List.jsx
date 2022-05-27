import { ContainerList } from './style_list'
import Descriptions from './Descriptions'
import ListItems from './ListItems'

const descriptions = [
  {
    id: 1,
    description: 'Guest',
  },
  {
    id: 2,
    description: 'Order Date',
  },
  {
    id: 3,
    description: 'Check In',
  },
  {
    id: 4,
    description: 'Check Out',
  },
  {
    id: 5,
    description: 'Special Request',
  },
  {
    id: 6,
    description: 'Room Type',
  },
  {
    id: 7,
    description: 'Status',
  },
]

function List() {
  return (
    <>
      <ContainerList>
        <Descriptions descriptions={descriptions} />
        <ListItems />
      </ContainerList>
    </>
  )
}

export default List
