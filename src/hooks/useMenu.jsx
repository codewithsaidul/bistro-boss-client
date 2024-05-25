
import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useMenu = () => {


    const axiosSecure = useAxiosSecure()

    const [loading, setLoading] = useState(true);

    const { refetch, data: menu = [] } = useQuery({
      queryKey: ['menu'],
      queryFn: async() => {
          try {
              const food  = await axiosSecure.get(`/menu`);
              setLoading(false)
              return food.data
              
          } catch (err) {
              console.log(err.message)
          }
      }
  })

    return [menu, refetch, loading]
}

export default useMenu