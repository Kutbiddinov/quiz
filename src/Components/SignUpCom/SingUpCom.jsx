import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./style.module.css";

export function SignUpCom() {
  const navigate = useNavigate();

  const HandleSubmit = (evt) => {
    evt.preventDefault();

    const { username, password } = evt.target.elements;

    axios
      .post("http://azamatov.pythonanywhere.com/account/register/", {
        username: username.value.toString(),
        password: password.value.toString(),
      })
      .then((json) => console.log(json));
  };

  return (
    <section className={style.section}>
      <div className={style.con}>
        <h1 className={style.h1}>Lets Register Account</h1>
        <h1 className={style.h11}>Hello user , you have a greatful journey</h1>
        <form className={style.form}>
          <input
            className={style.inp}
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            className={style.inp}
            type="text"
            name=""
            placeholder="First Name"
          />
          <input
            className={style.inp}
            type="text"
            name=""
            placeholder="Last Name"
          />
          <input
            className={style.inp}
            type="text"
            name="password"
            placeholder="Password"
          />
          <input
            className={style.inp}
            type="text"
            name=""
            placeholder="Confirm Password"
          />
          <button className={style.btn}>
            <h1 className={style.btnBody}>Sign up</h1>
          </button>
        </form>
        <div className={style.con1}>
          <p className={style.p}>Already have an account ?</p>
          <NavLink to={"/singin"}>
            <h3 className={style.link}>Login</h3>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
