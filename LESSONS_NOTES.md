# Lesson Notes

#### Concept: Implementing Paginated Queries with React Query
This lesson demonstrates how to implement paginated data fetching using React Query with proper UX considerations.

Key points:
- Created a query object pattern in `usePosts` that accepts pagination parameters
- Used the query object as part of the query key `['posts', query]` to ensure proper cache invalidation
- Added `keepPreviousData: true` to maintain the previous data while fetching new pages
- Implemented pagination controls in `PostList` with Previous/Next buttons
- Used query parameters to handle server-side pagination efficiently

Code example:
```typescript
interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  return useQuery({
    queryKey: ['posts', query],
    keepPreviousData: true,
    queryFn: () => // ... fetch logic
  });
};
```

Next steps:
- Add loading indicators to pagination buttons for better feedback
- Implement infinite scrolling as an alternative pagination approach
- Consider adding total count to implement page numbers

*If you find this repository helpful, please leave a star! ⭐*
*Previous lessons can be found in the commit history*