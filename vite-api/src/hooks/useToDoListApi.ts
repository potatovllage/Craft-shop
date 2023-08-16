import axios from "axios";
import type { AddToDoItem, ModifyToDoItem, ToDoListItem } from "../types/toDo";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useAddToDoItem = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (param: AddToDoItem) =>
      await axios.post(`/todos`, {
        ...param,
      }),
    {
      onError: () => {
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
      const response = await axios.get<ToDoListItem[]>(`/todos`);
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

  return useMutation(async () => await axios.delete(`/todos`), {
    onError: () => {
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
    async (param: number) => await axios.delete(`/todos/${param}`),
    {
      onError: () => {
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
      await axios.put(`/todos/${param.id}`, {
        ...param,
      }),
    {
      onError: () => {
        alert("To Do List 수정에 실패하였습니다.");
      },
      onSuccess: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
};
