import "bootstrap/dist/css/bootstrap.min.css";
import { FaLongArrowAltUp } from "react-icons/fa";
import { useRef } from "react";

const Enter = ({ setItems }) => {
  const item_name = useRef();
  const date = useRef();

  const handleClick = () => {
    const name = item_name.current.value;
    const dueDate = date.current.value;
    console.log('working1')
    setItems(name, dueDate);
    item_name.current.value = ""; // Clear the input field after submission
    date.current.value = ""; // Clear the input field after submission
  };

  return (
    <div className="container">
      <div className="row enter">
        <div className="col-6 new">
          <input type="text" placeholder="Enter new task here" ref={item_name} />
        </div>
        <div className="col-4 new">
          <input type="date" ref={date} />
        </div>
        <div className="col-2 arrow up">
          <button onClick={handleClick}><FaLongArrowAltUp /></button>
        </div>
      </div>
    </div>
  );
};

export default Enter;
