import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/Assets/Context";

import "./index.css";

const SignUp = () => {
  const { systemUsers, setSystemUsers } = useContext(AuthContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();


  const handleData = () => {
    const { name, value } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submit = (event) => {
    event.preventDefault();
    const existing = systemUsers.customers.find(
      (saved) => saved.email === data.email
    );

    console.log(systemUsers.customers);
    console.log(existing);
    if (undefined || !existing || null) {
     
      const saved = systemUsers.customers;
      saved.push(data);
      setSystemUsers((prev) => {
        return {
          ...prev,
          customers: saved,
        };
      });
      setData({
        name: "",
        email: "",
        password: "",
        phone: "",
      });
      navigate("/login");
    } else {
      console.log("Already there");
    }
    console.log(systemUsers.customers);
  };

  return (
    <main className="fade login-page">
      <form className="login-form" onSubmit={submit}>
        <h3>Sign Up</h3>
        <hr />
        <input
          type={"text"}
          placeholder="User Name"
          required={true}
          name="name"
          onChange={handleData}
          value={data.name}
        />
        <input
          type={"email"}
          placeholder="Email"
          required={true}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          name="email"
          onChange={handleData}
          value={data.email}
        />
        <input
          type={"number"}
          placeholder="Phone Number"
          required={true}
          name="phone"
          onChange={handleData}
          value={data.phone}
        />
        <input
          type={"password"}
          placeholder="Password"
          required={true}
         
          name="password"
          onChange={handleData}
          value={data.password}
        />
        <p>
          Already Have An Account? Click <Link to={"/login"}>here</Link>
        </p>

        <button>Sign Up</button>
      </form>
    </main>
  );
};

export { SignUp };
