# Lesson Notes

#### Concept: Implementing Mutations with React Query
This lesson covers how to implement data mutations (create, update, delete) using React Query's `useMutation` hook.

Key points:
- Used `useMutation` to handle form submissions in [`TodoForm`](src/react-query/TodoForm.tsx)
- Implemented proper form handling with `preventDefault()` to avoid page refreshes
- Utilized `useRef` for form input management
- Applied optimistic updates using `queryClient.setQueryData`

Code example:
```typescript
const addTodo = useMutation({
  mutationFn: (todo: Todo) => 
    axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo),
  onSuccess: (savedTodo) => {
    queryClient.setQueryData<Todo[]>(['todos'], 
      todos => [savedTodo, ...(todos || [])])
  }
});
```

#### Concept: Managing Cache Updates
Exploring different strategies for updating the cache after mutations.

Key points:
- Used `QueryClient` to manage cache updates
- Compared two approaches:
  1. Cache invalidation with `invalidateQueries`
  2. Direct cache updates with `setQueryData`
- Implemented optimistic updates for better UX
- Handled proper error rollback scenarios

Next steps:
- Implement loading and error states in the form
- Add toast notifications for success/error feedback
- Explore batch mutations for multiple items

*If you find this repository helpful, please leave a star! ⭐*
*Previous lessons can be found in the commit history*