import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};

const useTodos = () => {
    const fetchTodos = async (): Promise<Todo[]> => {
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
        return response.data;
    };

    return useQuery<Todo[], Error>(
        ['todos'], 
        fetchTodos,
        {
            retry: 3,
            cacheTime: 300_000, // 5 min 
            staleTime: 10 * 1000, // 10 sec
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false
        }
    );
};

export default useTodos;