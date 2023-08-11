export interface ToDoListItem {
  id: number;
  user_id: number;
  content: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface AddToDoItem {
  content: string;
}

export interface ModifyToDoItem {
  id: number;
  content?: string;
  completed?: boolean;
}
