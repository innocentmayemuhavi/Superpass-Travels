import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";
import "./index.css";

const Login = () => {
  const {
    setisLoading,
    setisLoggedin,
    setUser,
    user,
    systemUsers,
    setShowaccount,
  } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [warning, setWarning] = useState("");
  const submit = (event) => {
    event.preventDefault();
    const exist = systemUsers.customers.filter(
      (prev) => prev.email === data.email
    );

    if (exist) {
      const fill = systemUsers.customers.filter(
        (data1) => data1.email === data.email
      );
      console.log(systemUsers.customers);
      console.log(fill[0]);
      if (fill[0].password === data.password) {
        setUser(fill[0]);
        setisLoggedin(true);
        setUser(fill[0]);
        navigate("/");
        setWarning("");
        setShowaccount(false);
      } else {
        setWarning("Wrong Email Or Password");
      }
    } else {
      setWarning(`User Doesn't Exist!!`);
    }
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
  return (
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
          Don't have account? Click <Link to={"/signup"}>here</Link>
        </p>

        <button>Login</button>

        <Link to={"/"}>
          {" "}
          <p>Forgot Password?</p>
        </Link>
      </form>
    </main>
  );
};

export default Login;
