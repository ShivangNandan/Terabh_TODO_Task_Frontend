
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Todopg from './component/todopg';
import { useState } from 'react';
import Login from './component/login';

function App() {
  const Items_data = [{
      item: 'Buy milk',
      date: '23/11/24'
    },
  ];
  const [selectedtab, setselectedtab]=useState("login")

  const [Items_ata, setItem] = useState(Items_data);

  const setItems = (name, dueDate) => {
    const newItems = [...Items_ata, {
      item: name,
      date: dueDate
    }];
    setItem(newItems);
  };

  const delItems = (delName) => {
    const newItems = Items_ata.filter(item => item.item !== delName);
    setItem(newItems);
  };

  return (
    <div className='box'>
      {selectedtab==='login'?( <Login setselectedtab={setselectedtab}/>): (<Todopg Items_ata={Items_ata} delItems={delItems} setItems={setItems}/>)}

    </div>
  );
}

export default App;

