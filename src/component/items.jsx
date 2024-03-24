import "bootstrap/dist/css/bootstrap.min.css"
import { RiDeleteBin7Fill } from "react-icons/ri";
const Item=({item,date,delItems})=>{
  const handleDlete =()=>{
    const DelData=item;
    delItems(DelData);
  }
  let cnt='1';
  return(
    <div class="container text-center">
  <div class="row list">
  <div class="col-2"> task {cnt}</div>
    <div class="col-4">{item}</div>
    <div class="col-4">{date}</div>
    <div class="col-2" onClick={handleDlete}><button><RiDeleteBin7Fill /></button></div>
  </div>
</div>
  )
}
export default Item