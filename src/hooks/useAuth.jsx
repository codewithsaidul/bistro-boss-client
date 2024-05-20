import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"


const useAuth = () => {
    
    const AuthInfo = useContext(AuthContext)

  return AuthInfo
}

export default useAuth