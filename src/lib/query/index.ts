import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import toast from "react-hot-toast";

const BASE_URL = 'https://67eeab50c11d5ff4bf7a8702.mockapi.io/api/user/user';

export const GetAllUsers = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_CURRENT_USERS], 
        queryFn: async () => {
            try {
                const res = await fetch(`${BASE_URL}`);
                const data = await res.json();
                // if (data.error) return null;
                if (!res.ok) throw new Error(data.error || "Failed to GET users");
               console.log(data);
                return data;
            } catch (error: unknown) {
                console.error(error);
            
                if (error instanceof Error) {
                    toast.error(error.message || 'Failed to GET user');
                } else {
                    toast.error('Failed to GET user');
                }
                throw error;
            }
        },
        retry: false,
    });
};

export const useGetRideById = (id:unknown) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_CURRENT_USERS, id],
        queryFn: async () => {
            try {
                const res = await fetch(`${BASE_URL}/${id}`);
                if (!res.ok) throw new Error("Failed to fetch ride");
                const data = await res.json();
                return data;
            } catch (error: unknown) {
                console.error(error);
            
                if (error instanceof Error) {
                    toast.error(error.message || 'Failed to GET user');
                } else {
                    toast.error('Failed to GET user');
                }
                throw error;
            }
        },
    enabled: !!id,
        retry: false,
    });
};