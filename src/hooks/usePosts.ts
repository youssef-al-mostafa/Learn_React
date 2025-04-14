import { useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const usePosts = () => {
    const fetchPost = async (): Promise<Post[]> => {
        const response = await axios
            .get('https://jsonplaceholder.typicode.com/posts')
        return response.data;
    }
    return useQuery<Post[], Error>(
        ['posts'],
        fetchPost,
        {
            retry: 3,
            cacheTime: 300_000, // 5 min 
            staleTime: 10 * 1000, // 10 sec
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false
        }
    );
}

export default usePosts;