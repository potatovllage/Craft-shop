import axios from "axios";
import type { AddToDoItem, ModifyToDoItem, ToDoListItem } from "../types/ToDo";
import { useMutation, useQuery, useQueryClient } from "react-query";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
axios.defaults.withCredentials = true;

export const useAddToDoItem = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (param: AddToDoItem) =>
      await axios.post(`${BASE_URL}/api/todos`, {
        ...param,
      }),
    {
      onError: (error) => {
        console.log(error);
        alert("To Do List 작성에 실패하였습니다.");
      },
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export const useToDoListGet = () => {
  const { data, error } = useQuery(
    ["todos"],
    async () => {
      const response = await axios.get<ToDoListItem[]>(`${BASE_URL}/api/todos`);
      return response.data;
    },
    {
      onError: (error) => console.log(error),
    }
  );

  return { data, error };
};

export const useDeleteAllToDo = () => {
  const queryClient = useQueryClient();

  return useMutation(async () => await axios.delete(`${BASE_URL}/api/todos`), {
    onError: (error) => {
      console.log(error);
      alert("전체 To Do List 삭제에 실패하였습니다.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};

export const useDeleteToDo = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (param: number) =>
      await axios.delete(`${BASE_URL}/api/todos/${param}`),
    {
      onError: (error) => {
        console.log(error);
        alert("To Do List 삭제에 실패하였습니다.");
      },
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};

export const useModifyToDo = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (param: ModifyToDoItem) =>
      await axios.put(`${BASE_URL}/api/todos/${param.id}`, {
        ...param,
      }),
    {
      onError: (error) => {
        console.log(error);
        alert("To Do List 수정에 실패하였습니다.");
      },
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};
