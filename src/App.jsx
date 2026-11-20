import styles from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { queryClient } from "./components/Box";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Main />
      </QueryClientProvider>
    </>
  );
}

export default App;
