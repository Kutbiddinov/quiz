import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import logo from "../../Images/icons/logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.con}>
          <NavLink to={"/"}>
            <img src={logo} className={style.logo} />
          </NavLink>
          <ul className={style.list}>
            <li className={style.item}>
              <NavLink>
                <h3 className={style.navHead}>About</h3>
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink>
                <h3 className={style.navHead}>Statistics</h3>
              </NavLink>
            </li>
            <li className={style.item}>
              <NavLink>
                <h3 className={style.navHead}>Contact</h3>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <button className={style.user}></button>
    </header>
  );
}
