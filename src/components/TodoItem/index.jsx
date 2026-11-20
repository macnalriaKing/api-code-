import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, mutation, delMutate, delButton }) => {
  return (
    <div className={styles.todoObj}>
      <div className={styles.todoName}>
        <input
          onClick={() =>
            mutation.mutate({
              id: todo.id,
              title: todo.title,
              completed: !todo.completed,
            })
          }
          type="checkbox"
          defaultChecked={todo.completed}
        />
        <div>{todo.title}</div>
      </div>
      <button
        onClick={() => {
          delButton({ id: todo.id });
        }}
        className={styles.deleteButton}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
