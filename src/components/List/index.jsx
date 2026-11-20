import TodoItem from "../TodoItem";
import styles from "./List.module.css";

const List = ({ todos, delMutate, delButton, mutation }) => {
  const BUTTON_LIST = ["전체", "진행 중", "완료"];

  return (
    <>
      <div className={styles.handler}>
        <div className={styles.buttons}>
          {BUTTON_LIST.map((item) => (
            <button key={item}>
              <p>{item}</p>
            </button>
          ))}
        </div>
        <div className={styles.counter}>3개</div>
      </div>
      <div className={styles.todo}>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.content}
              todo={todo}
              mutation={mutation}
              delButton={delButton}
            />
          );
        })}
      </div>
    </>
  );
};

export default List;
