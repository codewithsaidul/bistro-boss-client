import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth";


const useCart = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            try {
                const food  = await axiosSecure.get(`/carts?email=${user?.email}`);
                return food.data
                
            } catch (err) {
                console.log(err.message)
            }
        }
    })

  return [cart, refetch]
}

export default useCart