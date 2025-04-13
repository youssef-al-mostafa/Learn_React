import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

const useTodos = () => {
    const fetchTodos = async (): Promise<Todo[]> => {
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
        return response.data;
    };

    return useQuery<Todo[], Error>(['todos'], fetchTodos);
};

export default useTodos;