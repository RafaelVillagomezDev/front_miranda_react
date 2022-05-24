import Descriptions from '../list/Descriptions'

import '../list/list.css'
import { ContainerList } from '../list/style_list'
import ListItemRoom from './ListItemRoom'

const descriptions = [
  {
    id: 1,
    description: 'Room Name',
  },
  {
    id: 2,
    description: '',
  },
  {
    id: 3,
    description: 'Bed Type',
  },
  {
    id: 4,
    description: 'Room Floor',
  },
  {
    id: 5,
    description: 'Facilities',
  },
  {
    id: 6,
    description: 'Rate',
  },
  {
    id: 7,
    description: 'Status',
  },
]

function ListRoom() {
  return (
    <>
      <ContainerList>
        <Descriptions descriptions={descriptions} />
        <ListItemRoom />
      </ContainerList>
    </>
  )
}

export default ListRoom
