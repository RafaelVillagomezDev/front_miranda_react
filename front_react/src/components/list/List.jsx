import { ContainerList } from './style_list'
import './list.css'
import Descriptions from './Descriptions'
import ListItem from './ListItem'

/*SEGUNDO ITEM LIST TENGO QUE ITERARLO , SEGUN CANTIDAD DE GUEST */

function List() {
  return (
    <>
      <ContainerList>
        <Descriptions />
        <ListItem />
      </ContainerList>
    </>
  )
}

export default List
