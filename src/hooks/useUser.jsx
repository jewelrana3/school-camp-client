import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], isLoading: loading, refetch } = useQuery(
        ['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    })

    return [users, loading, refetch]
};

export default useUser;