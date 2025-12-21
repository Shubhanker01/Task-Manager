import { useQuery } from "@tanstack/react-query";
import { populateUsers } from "../api/auth.api";

export const usePopulate = () => {
    return useQuery({
        queryKey: ['populateUsers'],
        queryFn: () => populateUsers()
    })
}