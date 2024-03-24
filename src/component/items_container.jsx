import Item from "./items"
const Items_container=({Items_data,delItems})=>{


  return(
  <div className="container">
  {Items_data.map(data => <Item delItems={delItems}  item={data.item} date={data.date}></Item>)}
</div>
  )
}
export default Items_container