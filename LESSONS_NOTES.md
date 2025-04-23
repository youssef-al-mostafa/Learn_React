# Lesson Notes

#### Concept: Custom Hook Extraction and Error Handling
This lesson demonstrates how to properly separate concerns by extracting mutation logic into custom hooks and implementing proper error handling.

Key points:
- Extracted mutation logic from [`TodoForm`](src/react-query/TodoForm.tsx) into a dedicated [`useAddTodo`](src/hooks/useAddTodo.ts) hook
- Implemented error handling with proper user feedback
- Separated UI concerns from data management logic

#### Concept: Constants Management and Type Safety
This lesson covers how to improve code maintainability and reduce errors through proper constants management.

Key points:
- Created a dedicated `constants.ts` file to centralize query keys
- Eliminated potential typo errors in query keys across components

Code example:
```typescript
// constants.ts
export const CACHE_KEY_TODOS = 'todos' as const;
export const CACHE_KEY_POSTS = 'posts' as const;
```

*If you find this repository helpful, please leave a star! ⭐*
*Previous lessons can be found in the commit history*