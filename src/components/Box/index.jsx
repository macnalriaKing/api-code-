import styles from "./Box.module.css";
import Editor from "../Editor";
import List from "../List";
import Footer from "../Footer";
import { useState } from "react";
import { QueryClient } from "@tanstack/react-query";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getTodoQuery,
  postTodoQuery,
  putTodoQuery,
  onClickQuery,
} from "../../api";

export const Box = () => {
  const [input, setInput] = useState();

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodoQuery,
    initialData: [],
  });

  const { mutate } = useMutation({
    mutationFn: postTodoQuery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const mutation = useMutation({
    mutationFn: putTodoQuery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutate: delMutate } = useMutation({
    mutationFn: onClickQuery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const onChangeCreate = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.mainBox}>
      <Editor onChangeCreate={onChangeCreate} input={input} mutate={mutate} />
      <List todos={data} mutation={mutation} delButton={delMutate} />
      <Footer />
    </div>
  );
};

export const queryClient = new QueryClient();
