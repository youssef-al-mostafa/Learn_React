# Lesson Notes

#### Concept: Separate the concerns
Creating useTodos hook encapsulates API fetching logic using React Query, keeping components clean. This separation ensures components focus on UI while the hook handles data operations.

Key points:
- `useTodos` uses `useQuery` with a unique queryKey for caching
- Returns data, error, and isLoading for component use
- Keeps API logic in one maintainable place

Next steps:
- Use in components and consider adding mutation hooks as needed.

#### Concept: Adding React Query Devtools
React Query Devtools is a development tool that provides insights into the state of your queries and mutations. It is useful for debugging and optimizing your React Query usage.

Key points:
- Installed `@tanstack/react-query-devtools` and added it to `main.tsx`.
- React Query Devtools is only included in the development build and will not be part of the production build.
- The devtools provide features like the number of observers, query states, and more.

Next steps:
- Explore the React Query Devtools documentation to learn more about its features and how to use them effectively.

*If you find this repository helpful, please leave a star! ⭐*

*Previous lessons can be found in the commit history*

