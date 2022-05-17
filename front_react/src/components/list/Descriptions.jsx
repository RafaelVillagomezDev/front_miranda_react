import { ItemCol, ItemListDescription } from './style_list'

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

function Descriptions() {
  return (
    <ItemListDescription>
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
    </ItemListDescription>
  )
}
export default Descriptions
