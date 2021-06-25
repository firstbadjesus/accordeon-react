
const AccordeonItem = (props) => {
return ( 
   <div className="item">
      <div
      className="title"
      onClick={() => {
         props.clickItemHandler(props.index);
      }}
      >
      <h2>{props.item.question}</h2>
      <span>{props.item.visible ? "-" : "+"}</span>
      </div>
      <div className={props.item.visible ? "content show" : "content"}>
      {props.item.answer}
      </div>
   </div>
)

};

export default AccordeonItem;