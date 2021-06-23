import { useState } from 'react'
import './App.css';

const initialData = [
  {
    visible: true,
    question: 'Question 1',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    visible: false,
    question: 'Question 2',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    visible: false,
    question: 'Question 3',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    visible: false,
    question: 'Question 4',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
]

function App() {

  const [data, setData] = useState(initialData)
  const [interfaceType, setInterfaceType] = useState(false)
  const changeInterface = () => {

    setInterfaceType(!interfaceType)
    const newData = [...data];
    newData.map((item, key) => {
      item.visible = key === 0;
      return item;
    });
  }

  const clickItemHandler = (index) => {
    const newData = [...data];
    newData.map((item, key) => {
      
      if (key === index) {
        
        item.visible = !item.visible;
      } else {
        if (interfaceType) {
          item.visible = false;
        }
      }
      return item;
    }) 
    setData(newData)
  }
  
  return (
    <div className="container wrapper">
      <div className="options">
        <button className="btn-default" onClick={changeInterface}>
          { interfaceType ? "First" : "Second" } interfacetype
        </button>
      </div>
      <div className="accordion">
        {data.map((item, key) => (
            <div className="item" key={key}>
              <div className="title" onClick={ () => { clickItemHandler(key) }}>
                <h2>{ item.question }</h2>
                <span>{item.visible ? '-' : '+'}</span>
              </div>
              <div className={item.visible ? 'content show' : 'content'}>{item.answer}</div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
