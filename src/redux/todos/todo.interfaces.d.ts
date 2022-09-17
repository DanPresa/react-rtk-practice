interface Todo {
  title: string;
  completed: boolean;
}

interface InitialStateI {
  todos: Todo[];
  loading: boolean;
  error: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

interface TodoFormProps {
  addTodo: AddTodo;
}

interface TodoListItemProps {
  todo: Todo;
}

type ToggleTodo = (todoSelected: Todo) => void;

type AddTodo = (newTodo: string) => void;
