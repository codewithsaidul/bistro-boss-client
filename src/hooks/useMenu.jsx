
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useMenu = () => {


    const axiosSecure = useAxiosSecure()

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const getMenu = async () => {
        const data = await axiosSecure('/menu');
        setMenu(data.data);
        setLoading(false)
      };
  
      getMenu();
    }, [menu, axiosSecure]);

    return [menu, loading]
}

export default useMenu