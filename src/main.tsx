import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// I am going to comment this default setting for now 
const queryClient = new QueryClient(/*{
  defaultOptions: {
    queries: {
      retry: 3,
      cacheTime: 300_000, // 5 min 
      staleTime: 10 * 1000, // 10 sec
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false
    }
  }
}*/);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>
);
