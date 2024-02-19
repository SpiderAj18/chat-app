import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { useState } from 'react'

const useLogin = () => {
    const {setAuthUser} = useAuthContext()
    const [loading,setLoading] = useState(false)

    const login = async (userName,password) =>{
        console.log("login-running")
        const success = handleInputErrors(userName, password);
        console.log(success)
		if (!success) return;
        setLoading(true)
        try {
            const res = await fetch("/api/auth/login",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({userName,password})
            })
            const data =await res.json()
            console.log("data",res)
            
            if(res.status===400){
                 toast.error("invalid credentials")
            }else if(res.status===200){
                toast.success("login successfully")
                //save to loacal storage 
                localStorage.setItem("chat-user",JSON.stringify(data))
                //change context 
                setAuthUser(data)

            }else{
                toast.error("Something went wrong")
                console.log("something went wrong")
            }
            


        } catch (error) {
          toast.error(error.message)
          console.log("error",error)
        }finally{
            setLoading(false)
        }
    }
    return {loading,login}
}

export default useLogin
function handleInputErrors(userName, password) {
	if (!userName || !password) {
		toast.error("Please fill in all fields");
		return false;
	}
    return true;
}