import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CASH_KEY_TODOS } from "../react-query/constans";

interface AddTodoContext {
    previousTodos: Todo[]
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: (todo: Todo) =>
            axios
                .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
                .then(res => res.data),
        onSuccess: (savedTodo, newTodo) => {
            console.log(savedTodo);
            const previousTodos = queryClient.setQueryData<Todo[]>(CASH_KEY_TODOS, (todos = []) => [
                savedTodo, 
                ...todos 
            ])
            onAdd();
            return { previousTodos };
            //   if (ref.current && ref.current.value) {
            //     ref.current.value = '';
            //   }
        }
    });
}

export default useAddTodo; 