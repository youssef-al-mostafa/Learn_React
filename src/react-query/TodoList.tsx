import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {

  const fetchTodos = async (): Promise<Todo[]> => {
    const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  }

  // useQuery it use so much thing but for now we are only badna data property 
  // so we distructerd
  const {data : todos, error} = useQuery<Todo[], Error>({
    // the data stored in the cash will be accessible via this key queryKey
    // in the key : the first value is the type of data that we wanna store here 
    // we can have additional value like completed ['todos', completed] u can do this 
    // there is no like a true and false 
    queryKey: ['todos'],
    // usequery doesn't care about how we are fetching the data its'all about managing 
    // and fetching data 
    queryFn: fetchTodos,
  });

  /*when u use useQuery u don't need useEffect or error state or todo state so u can delete them 
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [error, setError] = useState('');
  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => setTodos(res.data))
  //     .catch((error) => setError(error));
  // }, []);*/

  /*Some useQuery Benefit : <all of them u can configure as u wish>
  -autoRetires : useQuery will retires a couple of time when the fetch fails 
  -autoReferch : so we can configure it to auto refresh after a certain amount of time 
  -caching*/
  if (error) return <p>{error.message}</p>;
  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
