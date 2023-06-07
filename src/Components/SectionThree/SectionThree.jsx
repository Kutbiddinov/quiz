import style from "./style.module.css";

export function SectionThree() {
  return (
    <section className={style.section}>
      <div className={style.con}>
        <h2 className={style.h2}>Category</h2>
        <div className={style.line}></div>
      </div>
      <ul className={style.list}>
        <li className={style.item}>
          <h2 className={style.h21}>Mathematics</h2>
        </li>
        <li className={style.item}>
          <h2 className={style.h21}>Gym</h2>
        </li>
        <li className={style.item}>
          <h2 className={style.h21}>Gaming</h2>
        </li>
        <li className={style.item}>
          <h2 className={style.h21}>Physics</h2>
        </li>
      </ul>
    </section>
  );
}
