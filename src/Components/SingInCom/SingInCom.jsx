import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./style.module.css";

export function SingInCom() {
  document.title = "login";

  const navigate = useNavigate();

  const HandleSubmit = (evt) => {
    evt.preventDefault();

    const { username, password } = evt.target.elements;

    axios
      .post("http://azamatov.pythonanywhere.com/account/login", {
        username: username.value,
        password: password.value,
      })
      .then((json) => console.log(json));
  };
  return (
    <section className={style.section}>
      <div className={style.con}>
        <h1 className={style.h1}>Lets Sign you in</h1>
        <h1 className={style.h11}>Welcome Back , You have been missed</h1>
        <form className={style.form} onSubmit={HandleSubmit}>
          <input
            className={style.inp}
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            className={style.inp}
            type="text"
            name="password"
            placeholder="Password"
          />
          <button className={style.btn}>
            <h1 className={style.btnBody}>Sign in</h1>
          </button>
        </form>
        <div className={style.con1}>
          <p className={style.p}>Don’t have an account ?</p>
          <NavLink to={"/singup"}>
            <h3 className={style.link}>Register Now</h3>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
