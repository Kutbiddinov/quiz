import style from "./style.module.css"
import flexMuscles from "../../Images/icons/flexMuscules.svg"
import men from "../../Images/icons/men.svg"
import wow from "../../Images/icons/wow.svg"

export function Sectionone() {
    return (
        <section className={style.section}>
          <div className={style.con1}>
            <h1 className={style.h11}>Advantage of quiz</h1>
            <div className={style.span}></div>
          </div>
          <ul className={style.sectionlist}>
            <li className={style.sectionitem}>
              <img className={style.sectionimg} src={flexMuscles} alt="" />
              <p className={style.sectionp}>
                Our service is fast and you will not be unpleased with this
              </p>
            </li>
            <li className={style.sectionitem}>
              <img className={style.sectionimg} src={men} alt="" />
              <p className={style.sectionp}>
                Our service is fast and you will not be unpleased with this
              </p>
            </li>
            <li className={style.sectionitem}>
              <img className={style.sectionimg} src={wow} alt="" />
              <p className={style.sectionp}>
                Our service is fast and you will not be unpleased with this
              </p>
            </li>
          </ul>
        </section>
    )
}