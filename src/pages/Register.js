import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const handleChage = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* name field */}
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChage}
          className="form-input"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Register;
