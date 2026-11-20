import axios from "axios";

const API_URL =
  "https://pftqrdpktzvurqulotfa.supabase.co/rest/v1/practice_todos";

const apikey = import.meta.env.VITE_API_KEY;

// 1. Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    apikey,
  },
});

export const getTodoQuery = async () => {
  const result = await axiosInstance.get(
    `${API_URL}?select=id%2Ctitle%2Ccompleted%2Ccreated_at&order=id.asc`,
  );
  return result.data;
};

export const postTodoQuery = async (data) => {
  const result = await axiosInstance.post(`${API_URL}`, data);
  return result;
};

export const putTodoQuery = async ({ id, title, completed }) => {
  const result = await axiosInstance.patch(`${API_URL}?id=eq.${id}`, {
    title,
    completed: completed,
  });

  return result;
};

export const onClickQuery = async ({ id }) => {
  const result = await axiosInstance.delete(`${API_URL}?id=eq.${id}`);
  return result;
};
