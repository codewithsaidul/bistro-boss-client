import axios from "axios";
import { useEffect, useState } from "react";


const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const getMenu = async () => {
        const data = await axios("/menu.json");
        setMenu(data.data);
        setLoading(false)
      };
  
      getMenu();
    }, []);

    return [menu, loading]
}

export default useMenu