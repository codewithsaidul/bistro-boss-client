import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});
const useAxiosSecure = () => {

  // const { logOut } = useAuth();
  // const navigate = useNavigate()

  // Interceptor For Request
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('Access-Token')
      config.headers.authorization = `Bearer ${token}`
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );


  // Intercepter for 401 & 403
  axiosSecure.interceptors.response.use( function (response) {
    return response;
  }, function (error) {
    // const status = error.response.status

    // if(status === 401 || status === 403) {
    //   logOut();
    //   navigate('/login')
    // }
    return Promise.reject(error)
  })
  return axiosSecure;
};

export default useAxiosSecure;
