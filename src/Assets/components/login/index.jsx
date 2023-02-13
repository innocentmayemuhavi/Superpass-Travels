import { Link } from "react-router-dom"


const Login=()=>{

    return<>
    <p>Login</p>
   <Link to={"/"}> <button onClick={()=>{
        setisLoggedin(true)
        console.log(isloggedin)
    }
    }>
        Login
    </button></Link>
    </>

}

export default Login