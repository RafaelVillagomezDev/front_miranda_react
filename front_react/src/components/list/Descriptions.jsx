import { ItemCol, ItemListDescription } from './style_list'

function Descriptions(props) {
  return (
    <ItemListDescription>
      {props.descriptions.map((item) => {
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
