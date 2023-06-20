import { useContext, useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/Assets/Context";
import Loading from "../../Loading";
import "./index.css";
import { FirebaseContext } from "../../../src/Assets/Context/firebaseContext";

const Login = () => {
  const navigate = useNavigate();
  const { setisLoading, isLoading } = useContext(AuthContext);
  const { signin, user, warning,setWarning } = useContext(FirebaseContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (document.readyState === "complete") {
      console.log("loaded");
      setInterval(() => setisLoading(false), 1000);
    } else {
      console.log("loading");
      setisLoading(true);
      window.addEventListener("load", console.log("loading"), false);

      return window.removeEventListener("load", console.log("loading"));
    }
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    setisLoading(true);
    try {
      await signin(data.email, data.password);
    } catch (error) {
      setWarning(error.code);
    }
    setisLoading(false);
  };
  const handleData = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return user ? (
    <Navigate to="/" />
  ) : (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="fade login-page">
          <form className="login-form" onSubmit={submit}>
            <h3>Login</h3>
            <hr />
            <p className="warning">{warning}</p>
            <input
              type={"email"}
              placeholder="Enter Email"
              required={true}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              name="email"
              value={data.email}
              onChange={handleData}
            />
            <input
              type={"password"}
              placeholder="Password"
              required={true}
              name="password"
              value={data.password}
              onChange={handleData}
            />
            <p>
              Don't have account? Click <Link to={"/signup"} onClick={()=>setWarning('')}>here</Link>
            </p>

            <button>Login</button>

            <p onClick={() => navigate("/resetpassword")} className="forgot-password">Forgot Password?</p>
          </form>
        </main>
      )}
    </>
  );
};

export default Login;
