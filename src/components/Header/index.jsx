import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <p className={styles.star}>✦</p>
        <p>하루 한 칸</p>
      </div>
      <p className={styles.small}>나의 작은 할 일 목록</p>
    </header>
  );
};

export default Header;
