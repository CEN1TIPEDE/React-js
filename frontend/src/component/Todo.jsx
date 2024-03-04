import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon from the react-fontawesome library
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Importing the pen icon from FontAwesome
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Importing the trash icon from FontAwesome
import '../styles/Todo.css'; // Importing the CSS file for styling

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  // Styling for the completion button
  const buttonStyle = {
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    backgroundColor: task.completed ? 'green' : 'transparent',
    border: '1px solid black',
    cursor: 'pointer',
  };

  // Rendering the Todo component
  return (
    <div className="Todo"> {/* Container for the todo item */}
      <div style={{ display: 'flex', alignItems: 'center' }}> {/* Container for the todo text and completion button */}
        <button
          style={buttonStyle} // Applying the completion button style
          onClick={() => toggleComplete(task.id)} // Calling toggleComplete function when the completion button is clicked
        ></button> {/* Empty button for completion status */}
        <p
          className={`${task.completed ? 'completed' : ''}`} // Applying completed class if the task is completed
          style={{ marginLeft: '10px', flex: 1 }} // Styling for the todo text
        >
          {task.task} {/* Displaying the todo task */}
        </p>
      </div>
      <div> {/* Container for the edit and delete icons */}
        {/* Edit icon */}
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} /> {/* Calling editTodo function when the edit icon is clicked */}
        {/* Delete icon */}
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} /> {/* Calling deleteTodo function when the delete icon is clicked */}
      </div>
    </div>
  );
};