import './index.css';
import IconMinus from '../UI/Icons/IconMinus';
import IconPlus from '../UI/Icons/IconPlus';

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
        {props.open ? <IconMinus /> : <IconPlus />}
      </div>
      <div className={props.open ? 'content show' : 'content'}>
        {props.item.answer}
      </div>
    </div>
  );
};

export default AccordeonItem;
