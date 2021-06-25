
import AccordeonItem from "../AcordeonItem"

const Accordeon = (props) => {
   

return (
   <div className="accordeon">
      {props.data.map((item, key) => (
         <AccordeonItem item={item} clickItemHandler={props.clickItemHandler} index={key} key={key} />
      ))}
   </div>

);
};
export default Accordeon;