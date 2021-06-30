import { useState } from 'react'
import AccordeonItem from "../AcordeonItem"
import '../../App.css';

const Accordeon = (props) => {
   const [data, setData] = useState(props.data)
   const clickItemHandler = (index) => {
      const newData = [...data];
      newData.map((item, key) => {
      
      if (key === index) {
      
         item.visible = !item.visible;
      } else {
         if (props.interfaceType) {
            item.visible = false;
         }
      }
      return item;
      }) 
      setData(newData)
   }
   

return (
   <div className="accordeon">
      {data.map((item, key) => (
         <AccordeonItem item={item} clickItemHandler={clickItemHandler} index={key} key={key} />
      ))}
   </div>

);
};
export default Accordeon;