import { ContainerList, ItemCol, ItemList } from './style_list'
import './list.css'
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
    description: 'Special Request',
  },
  {
    id: 5,
    description: 'Room Type',
  },
  {
    id: 6,
    description: 'Status',
  },
]

function List() {
  return (
    <>
      <ContainerList>
        <ItemList>
          {descriptions.map((item) => {
            if (item.description === 'Guest') {
              return (
                <ItemCol key={item.id}>
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" />
                    {item.description}
                  </label>
                </ItemCol>
              )
            } else {
              return (
                <ItemCol key={item.id}>
                  <h1>{item.description}</h1>
                </ItemCol>
              )
            }
          })}
        </ItemList>
        <ItemList>
          <ItemCol>
            <h1>pepe</h1>
          </ItemCol>
          <ItemCol>
            <h1>pepe</h1>
          </ItemCol>
          <ItemCol>
            <h1>pepe</h1>
          </ItemCol>
          <ItemCol>
            <h1>pepe</h1>
          </ItemCol>
          <ItemCol>
            <h1>pepe</h1>
          </ItemCol>
          <ItemCol>
            <h1>pepe</h1>
          </ItemCol>
        </ItemList>
      </ContainerList>
    </>
  )
}

export default List
