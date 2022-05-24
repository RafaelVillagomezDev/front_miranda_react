import Descriptions from '../list/Descriptions'
import { ContainerList } from '../list/style_list'

const descriptions = [
  {
    id: 1,
    description: 'Name',
  },
  {
    id: 2,
    description: '',
  },
  {
    id: 3,
    description: 'Job Desk',
  },
  {
    id: 4,
    description: 'Shedule',
  },
  {
    id: 5,
    description: 'Contact',
  },
  {
    id: 6,
    description: 'Status',
  },
]

function ListUser() {
  return (
    <>
      <ContainerList>
        <Descriptions descriptions={descriptions} />
      </ContainerList>
    </>
  )
}
export default ListUser
