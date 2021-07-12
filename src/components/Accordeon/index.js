import {useState} from 'react';
import AccordeonItem from '../AcordeonItem';
import './index.css';

const Accordeon = props => {
  const [data] = useState (props.data);
  let [openIndexes, setOpenIndexes] = useState ([]);
  const clickItemHandler = index => {
    let openIndexesCopy = props.interfaceType ? [] : [...openIndexes];

    if (openIndexes.includes (index)) {
      setOpenIndexes (openIndexesCopy.filter (x => x !== index));
    } else {
      setOpenIndexes ([...openIndexesCopy, index]);
    }
  };

  return (
    <div className="accordeon">
      {data.map ((item, key) => (
        <AccordeonItem
          item={item}
          open={openIndexes.includes (key)}
          clickItemHandler={clickItemHandler}
          index={key}
          key={key}
        />
      ))}
    </div>
  );
};
export default Accordeon;
