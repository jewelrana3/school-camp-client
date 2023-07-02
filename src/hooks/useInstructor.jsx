import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";



const useInstructor =()=>{
    // const {user} = useContext(AuthContext)
    // const [axiosSecure] = useAxiosSecure();

    
    // const { data: users = [], isLoading: loading } = useQuery(
    //     ['users'], async () => {
    //     const res = await axiosSecure.get('/instructor');
    //     return res.data;
    // })

    // return [users, loading]

    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const {data : insInstructor, isLoading : isInstructorLoading} = useQuery({
        queryKey : ['insInstructor', user?.email],
        queryFn : async ()=> {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            console.log('is instructor response ', res)
            return res.data.admin
        }
    })
    return [insInstructor, isInstructorLoading]
}
export default useInstructor