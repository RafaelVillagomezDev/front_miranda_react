import Descriptions from '../list/Descriptions'
import { ContainerList } from '../list/style_list'

import '../list/list.css'

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
      </ContainerList>
    </>
  )
}

export default ListRoom
