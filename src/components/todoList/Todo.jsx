import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/reducer/todosReducer";

export default function Todo({ todo }) {
  const  dispatch = useDispatch();

  console.log("todo", todo);

  const handleDelete = (id) => {
    
    console.log(id)
      dispatch(deleteTodo(id));
   
    
  };

  return (
    <div>
      <span>{todo.task}</span>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
}
