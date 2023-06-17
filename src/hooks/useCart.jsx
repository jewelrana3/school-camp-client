import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () =>{
  
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // const token = localStorage.getItem('access-token')
 
    const { refetch,data:cart=[]} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
          
          const res = await axiosSecure(`/cart?email=${user?.email}`)
          return res.data;
        },
    })
    return [cart,refetch]
    
}

export default useCart;