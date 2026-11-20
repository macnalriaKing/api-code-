import styles from "./Editor.module.css";

const Editor = ({ input, onChangeCreate, mutate }) => {
  return (
    <div className={styles.editorMain}>
      <h3 className={styles.createText}>할 일 추가</h3>
      <div className={styles.x}>
        <input
          value={input}
          onChange={onChangeCreate}
          placeholder="예: React 컴포넌트 만들기"
          className={styles.Editor}
        />
        <button
          onClick={() => {
            mutate({
              title: input,
              completed: false,
            });
          }}
          className={styles.button}
        >
          <p>+ 추가</p>
        </button>
      </div>
    </div>
  );
};

export default Editor;
