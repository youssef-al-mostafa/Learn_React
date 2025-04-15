import { useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQuery {
    page: number; 
    pageSize: number; 
}

const usePosts = (query : PostQuery) => {
     return useQuery<Post[], Error>(
        ['posts', query],
        () => axios
               .get('https://jsonplaceholder.typicode.com/posts',{
                  params:{
                     _start: (query.page - 1) * query.pageSize,
                     _limit: query.pageSize
                  }
               })
               .then((res) => res.data),
        {
            retry: 3,
            cacheTime: 300_000, // 5 min 
            staleTime: 10 * 1000, // 10 sec
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
            keepPreviousData: true, 
        }
    );
}

export default usePosts;