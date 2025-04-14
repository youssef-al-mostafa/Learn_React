# Lesson Notes

#### Concept: Customizing React Query Default Options
React Query allows you to customize its default behavior to suit your application's needs. In this lesson, we explored how to modify default options in `main.tsx`.

Key points:
- **Retry Behavior**: Configured React Query to retry failed requests up to 3 times before throwing an error. This ensures resilience in case of temporary network issues.
- **Cache Time**: Controls how long inactive queries are stored in memory before being garbage collected. This helps manage memory usage effectively.
- **Stale Time**: Determines how long data is considered fresh. Increasing stale time reduces unnecessary network requests and improves performance by:
  - Preventing automatic refetches when the component remounts, the window regains focus, or the network reconnects.
  - Keeping data fresh for a longer duration, reducing API load.

Next steps:
- Use these configurations in real-world scenarios to understand their impact on performance and user experience.

*If you find this repository helpful, please leave a star! ⭐*
*Previous lessons can be found in the commit history*

