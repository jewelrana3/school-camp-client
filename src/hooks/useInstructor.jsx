import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";



const useInstructor = () => {

    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: insInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['insInstructor', user?.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
                console.log('is admin response', res);
                return res.data.admin;
            } catch (error) {
                console.error('Error fetching admin status:', error);
                throw error; // Rethrow the error to indicate that the query failed.
            }
        }
    })
    return [insInstructor, isInstructorLoading]
}
export default useInstructor