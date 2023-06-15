import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const cartUse = email =>{
    const {user} = useContext(AuthContext);

    const { refetch,data={}} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
          const res = await fetch(`http://localhost:4000/carts?email=${user.email}`)
          return res.data
        },
    })
    return [data,refetch]
}

export default cartUse;