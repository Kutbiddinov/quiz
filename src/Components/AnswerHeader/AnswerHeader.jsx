import style from "./style.module.css";
import { NavLink } from "react-router-dom";

export function AnswerHeader() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.con}>
          <NavLink to={"/"}>
            <h2 className={style.logo}>Quiz Time</h2>
          </NavLink>
        </div>
      </nav>
      <button className={style.user}>
        <img className={style.userimg} src="" />
        <h3 className={style.username}>user</h3>
      </button>
    </header>
  );
}
