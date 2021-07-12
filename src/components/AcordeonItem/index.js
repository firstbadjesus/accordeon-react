import './index.css';

const AccordeonItem = props => {
  return (
    <div className="item">
      <div
        className="title"
        onClick={() => {
          props.clickItemHandler (props.index);
        }}
      >
        <h2>{props.item.question}</h2>
        <span>{props.open ? '-' : '+'}</span>
      </div>
      <div className={props.open ? 'content show' : 'content'}>
        {props.item.answer}
      </div>
    </div>
  );
};

export default AccordeonItem;
