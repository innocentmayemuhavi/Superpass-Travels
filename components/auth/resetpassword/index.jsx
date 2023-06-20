import { useContext, useState } from "react";
import { FirebaseContext } from "../../../src/Assets/Context/firebaseContext";
import { useNavigate } from "react-router-dom";
import "./index.css";
const ResetPassword = () => {
  const navigate = useNavigate();
  const { warning, resetpassword } = useContext(FirebaseContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setIsloading(true);
    const { email } = event.target.elements;
    try {
      await resetpassword(email.value);
      setIsProcessing(false);
      setTimeout(() => navigate("/login"), 3500);
    } catch (error) {
      setIsProcessing(true);
    }
  };
  return (
    <>
      <main className="fade login-page">
        {isloading ? (
          <div className="notify">
            {isProcessing ? (
              <p>Requesting... Processing... Sending... </p>
            ) : (
              <>
                <p>A link to reset your Account has been sent to your email</p>
                <div className="svg">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                  >
                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                  >
                    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                  </svg>
                </div>
              </>
            )}
          </div>
        ) : (
          <form className="login-form" onSubmit={() => submit(event)}>
            <h3>Reset Password</h3>
            <hr />
            <p className="warning">{warning}</p>
            <input
              type={"email"}
              placeholder="Enter Email"
              required={true}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              name="email"
            />

            <button>Submit</button>
          </form>
        )}
      </main>
    </>
  );
};

export { ResetPassword };
