import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const Login = ({ setselectedtab }) => {
  const [EmailPassword, setEmailPassword] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setEmailPassword({ ...EmailPassword, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = EmailPassword;
    if (password.length < 6) {
      setselectedtab("login");
      alert("length of password should be at least 6 characters");
    } else if (email.length === 0) {
      setselectedtab("login");
      alert("Enter valid Email id");
  
    } else {
      setselectedtab("fgt");
    }
    setEmailPassword({email: "",
    password: ""})
  };
  return (
    <>
      <form className="logi" onSubmit={handleSubmit}>
        <div class="mb-3 ">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            value={EmailPassword.email}
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            value={EmailPassword.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" class="btn btn-primary ">
          login
        </button>
      </form>
    </>
  );
};

export default Login;
