import React from 'react';
import Enter from './enter';
import Task from './taskname';
import Items_container from './items_container';

const Todopg = ({ Items_ata, delItems, setItems }) => {
  return (
    <div>
      <Task />
      <Items_container Items_data={Items_ata} delItems={delItems} />
      <Enter setItems={setItems} />
    </div>
  );
};

export default Todopg
