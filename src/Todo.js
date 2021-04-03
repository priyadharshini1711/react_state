function Todo(props){
 
    const todo = props.todo;
    const listItems = todo.map((item) =>
      <li key={item.id}>
        {item.value}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
}

export default Todo;