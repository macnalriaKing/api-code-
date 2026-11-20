import styles from "./Main.module.css";
import { Box } from "../Box";
const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles.warpper}>
        <div className={styles.subtitle}>
          <h1 className={styles.today}>오늘의 할 일</h1>
          <p>작은 일부터 하나씩 완료해 보세요.</p>
        </div>
        <Box />
      </div>
    </main>
  );
};

export default Main;
